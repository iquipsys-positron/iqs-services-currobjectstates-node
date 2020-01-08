"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
class CurrentObjectStateDataValueV1Schema extends pip_services3_commons_node_1.ObjectSchema {
    constructor() {
        super();
        this.withRequiredProperty('id', pip_services3_commons_node_2.TypeCode.Integer);
        this.withRequiredProperty('typ', pip_services3_commons_node_2.TypeCode.Integer);
        this.withRequiredProperty('val', pip_services3_commons_node_2.TypeCode.Float);
    }
}
exports.CurrentObjectStateDataValueV1Schema = CurrentObjectStateDataValueV1Schema;
//# sourceMappingURL=CurrentObjectStateDataValueV1Schema.js.map