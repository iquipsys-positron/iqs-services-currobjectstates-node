"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
class ZonePresenceV1Schema extends pip_services3_commons_node_1.ObjectSchema {
    constructor() {
        super();
        this.withRequiredProperty('org_id', pip_services3_commons_node_2.TypeCode.String);
        this.withRequiredProperty('duration', pip_services3_commons_node_2.TypeCode.Float);
        this.withOptionalProperty('entered', pip_services3_commons_node_2.TypeCode.Boolean);
        this.withOptionalProperty('exited', pip_services3_commons_node_2.TypeCode.Boolean);
    }
}
exports.ZonePresenceV1Schema = ZonePresenceV1Schema;
//# sourceMappingURL=ZonePresenceV1Schema.js.map