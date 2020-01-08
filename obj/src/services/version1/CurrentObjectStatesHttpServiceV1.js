"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class CurrentObjectStatesHttpServiceV1 extends pip_services3_rpc_node_1.CommandableHttpService {
    constructor() {
        super('v1/curr_object_states');
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('iqs-services-currobjectstates', 'controller', 'default', '*', '1.0'));
    }
}
exports.CurrentObjectStatesHttpServiceV1 = CurrentObjectStatesHttpServiceV1;
//# sourceMappingURL=CurrentObjectStatesHttpServiceV1.js.map