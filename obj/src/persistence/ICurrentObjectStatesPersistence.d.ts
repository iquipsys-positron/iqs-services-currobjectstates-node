import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IGetter } from 'pip-services3-data-node';
import { IWriter } from 'pip-services3-data-node';
import { CurrentObjectStateV1 } from '../data/version1/CurrentObjectStateV1';
export interface ICurrentObjectStatesPersistence extends IGetter<CurrentObjectStateV1, string>, IWriter<CurrentObjectStateV1, string> {
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<CurrentObjectStateV1>) => void): void;
    getOneById(correlationId: string, id: string, callback: (err: any, item: CurrentObjectStateV1) => void): void;
    set(correlationId: string, item: CurrentObjectStateV1, callback: (err: any, item: CurrentObjectStateV1) => void): void;
    deleteById(correlationId: string, id: string, callback: (err: any, item: CurrentObjectStateV1) => void): void;
    deleteByFilter(correlationId: string, filter: FilterParams, callback: (err: any) => void): void;
}
