"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const CurrentObjectStatesServiceFactory_1 = require("../build/CurrentObjectStatesServiceFactory");
class CurrentObjectStatesLambdaFunction extends pip_services3_aws_node_1.CommandableLambdaFunction {
    constructor() {
        super("curr_object_states", "Current object states function");
        this._factories.add(new CurrentObjectStatesServiceFactory_1.CurrentObjectStatesServiceFactory);
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('iqs-services-currobjectstates', 'controller', 'default', '*', '*'));
    }
    getReferences() {
        return this._references;
    }
}
exports.CurrentObjectStatesLambdaFunction = CurrentObjectStatesLambdaFunction;
exports.handler = new CurrentObjectStatesLambdaFunction().getHandler();
//# sourceMappingURL=CurrentObjectStatesLambdaFunction.js.map