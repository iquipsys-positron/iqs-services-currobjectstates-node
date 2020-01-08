let _ = require('lodash');

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-node';

import { CurrentObjectStateV1 } from '../data/version1/CurrentObjectStateV1';
import { ICurrentObjectStatesPersistence } from './ICurrentObjectStatesPersistence';

export class CurrentObjectStatesMongoDbPersistence
    extends IdentifiableMongoDbPersistence<CurrentObjectStateV1, string>
    implements ICurrentObjectStatesPersistence {

    constructor() {
        super('curr_object_states');
        super.ensureIndex({ org_id: 1, time: -1 });
        this._maxPageSize = 1000;
    }
    
    private composeFilter(filter: any) {
        filter = filter || new FilterParams();

        let criteria = [];

        let id = filter.getAsNullableString('id');
        if (id != null)
            criteria.push({ _id: id });

        let orgId = filter.getAsNullableString('org_id');
        if (orgId != null)
            criteria.push({ org_id: orgId });

        let deviceId = filter.getAsNullableString('device_id');
        if (deviceId != null)
            criteria.push({ device_id: deviceId });

        let fromTime = filter.getAsNullableDateTime('from_time');
        if (fromTime != null)
            criteria.push({ time: { $gte: fromTime } });

        let toTime = filter.getAsNullableDateTime('to_time');
        if (toTime != null)
            criteria.push({ time: { $lt: toTime } });

        // Filter ids
        let ids = filter.getAsObject('ids');
        if (_.isString(ids))
            ids = ids.split(',');
        if (_.isArray(ids))
            criteria.push({ _id: { $in: ids } });

        return criteria.length > 0 ? { $and: criteria } : null;
    }
    
    public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CurrentObjectStateV1>) => void): void {
        super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null, callback);
    }

    public deleteByFilter(correlationId: string, filter: FilterParams,
        callback: (err: any) => void): void {
        super.deleteByFilter(correlationId, this.composeFilter(filter), callback);
    }

}
