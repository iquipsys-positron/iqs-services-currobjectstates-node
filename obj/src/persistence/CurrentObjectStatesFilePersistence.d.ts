import { ConfigParams } from 'pip-services3-commons-node';
import { JsonFilePersister } from 'pip-services3-data-node';
import { CurrentObjectStatesMemoryPersistence } from './CurrentObjectStatesMemoryPersistence';
import { CurrentObjectStateV1 } from '../data/version1/CurrentObjectStateV1';
export declare class CurrentObjectStatesFilePersistence extends CurrentObjectStatesMemoryPersistence {
    protected _persister: JsonFilePersister<CurrentObjectStateV1>;
    constructor(path?: string);
    configure(config: ConfigParams): void;
}
