let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { DependencyResolver } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';
import { DateTimeConverter } from 'pip-services3-commons-node';

import { CurrentObjectStateV1 } from '../data/version1/CurrentObjectStateV1';
import { ICurrentObjectStatesPersistence } from '../persistence/ICurrentObjectStatesPersistence';
import { ICurrentObjectStatesController } from './ICurrentObjectStatesController';
import { CurrentObjectStatesCommandSet } from './CurrentObjectStatesCommandSet';

export class CurrentObjectStatesController implements  IConfigurable, IReferenceable, ICommandable, ICurrentObjectStatesController {
    private static _defaultConfig: ConfigParams = ConfigParams.fromTuples(
        'dependencies.persistence', 'iqs-services-currobjectstates:persistence:*:*:1.0'
    );

    private _dependencyResolver: DependencyResolver = new DependencyResolver(CurrentObjectStatesController._defaultConfig);
    private _persistence: ICurrentObjectStatesPersistence;
    private _commandSet: CurrentObjectStatesCommandSet;

    public configure(config: ConfigParams): void {
        this._dependencyResolver.configure(config);
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired<ICurrentObjectStatesPersistence>('persistence');
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new CurrentObjectStatesCommandSet(this);
        return this._commandSet;
    }
    
    public getStates(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CurrentObjectStateV1>) => void): void {
        this._persistence.getPageByFilter(correlationId, filter, paging, callback);
    }

    public getStateById(correlationId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        this._persistence.getOneById(correlationId, id, callback);
    }

    private fixState(state: CurrentObjectStateV1): void {
        if (_.isString(state.pos))
            state.pos = JSON.parse(state.pos);

        state.id = state.object_id || state.id;
        state.object_id = state.object_id || state.id;
        state.time = DateTimeConverter.toNullableDateTime(state.time) || new Date();
        state.pos_time = DateTimeConverter.toNullableDateTime(state.pos_time);
        state.last_pos_time = DateTimeConverter.toNullableDateTime(state.last_pos_time);
        state.state_time = DateTimeConverter.toNullableDateTime(state.state_time);
        state.rule_time = DateTimeConverter.toNullableDateTime(state.rule_time);
        state.attend_time = DateTimeConverter.toNullableDateTime(state.attend_time);
        state.attend_start = DateTimeConverter.toNullableDateTime(state.attend_start);
    }

    public setState(correlationId: string, state: CurrentObjectStateV1, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        this.fixState(state);
        this._persistence.set(correlationId, state, callback);
    }

    public deleteStatesByFilter(correlationId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        this._persistence.deleteByFilter(correlationId, filter, callback);
    }

    public deleteStateById(correlationId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        this._persistence.deleteById(correlationId, id, callback);
    }

}
