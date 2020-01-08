import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';

import { CurrentObjectStatesServiceFactory } from '../build/CurrentObjectStatesServiceFactory';

export class CurrentObjectStatesProcess extends ProcessContainer {

    public constructor() {
        super("curr_object_states", "Current object states microservice");
        this._factories.add(new CurrentObjectStatesServiceFactory);
        this._factories.add(new DefaultRpcFactory);
    }

}
