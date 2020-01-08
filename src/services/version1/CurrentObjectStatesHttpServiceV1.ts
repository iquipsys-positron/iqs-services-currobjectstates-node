import { Descriptor } from 'pip-services3-commons-node';
import { CommandableHttpService } from 'pip-services3-rpc-node';

export class CurrentObjectStatesHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/curr_object_states');
        this._dependencyResolver.put('controller', new Descriptor('iqs-services-currobjectstates', 'controller', 'default', '*', '1.0'));
    }
}