import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-node';
import { CurrentObjectStateV1 } from '../data/version1/CurrentObjectStateV1';
import { ICurrentObjectStatesPersistence } from './ICurrentObjectStatesPersistence';
export declare class CurrentObjectStatesMongoDbPersistence extends IdentifiableMongoDbPersistence<CurrentObjectStateV1, string> implements ICurrentObjectStatesPersistence {
    constructor();
    private composeFilter;
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<CurrentObjectStateV1>) => void): void;
    deleteByFilter(correlationId: string, filter: FilterParams, callback: (err: any) => void): void;
}
