"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const CurrentObjectStatesServiceFactory_1 = require("../build/CurrentObjectStatesServiceFactory");
class CurrentObjectStatesProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("curr_object_states", "Current object states microservice");
        this._factories.add(new CurrentObjectStatesServiceFactory_1.CurrentObjectStatesServiceFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
    }
}
exports.CurrentObjectStatesProcess = CurrentObjectStatesProcess;
//# sourceMappingURL=CurrentObjectStatesProcess.js.map