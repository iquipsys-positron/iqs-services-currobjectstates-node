import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { CurrentObjectStateV1 } from '../data/version1/CurrentObjectStateV1';

export interface ICurrentObjectStatesController {
    getStates(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CurrentObjectStateV1>) => void): void;

    getStateById(correlationId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void;

    setState(correlationId: string, state: CurrentObjectStateV1, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void;

    deleteStatesByFilter(correlationId: string, filter: FilterParams, 
        callback: (err: any) => void): void;

    deleteStateById(correlationId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void;
}
