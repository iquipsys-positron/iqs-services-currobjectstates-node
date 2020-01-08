"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const ZonePresenceV1Schema_1 = require("./ZonePresenceV1Schema");
const CurrentObjectStateDataValueV1Schema_1 = require("./CurrentObjectStateDataValueV1Schema");
class CurrentObjectStateV1Schema extends pip_services3_commons_node_1.ObjectSchema {
    constructor() {
        super();
        this.withOptionalProperty('id', pip_services3_commons_node_3.TypeCode.String);
        this.withRequiredProperty('org_id', pip_services3_commons_node_3.TypeCode.String);
        this.withOptionalProperty('object_id', pip_services3_commons_node_3.TypeCode.String);
        this.withOptionalProperty('device_id', pip_services3_commons_node_3.TypeCode.String);
        this.withOptionalProperty('time', pip_services3_commons_node_3.TypeCode.DateTime);
        this.withOptionalProperty('pos', null); // GeoJSON
        this.withOptionalProperty('alt', pip_services3_commons_node_3.TypeCode.Float);
        this.withOptionalProperty('angle', pip_services3_commons_node_3.TypeCode.Float);
        this.withOptionalProperty('speed', pip_services3_commons_node_3.TypeCode.Float);
        this.withOptionalProperty('last_pos', null); // GeoJSON
        this.withOptionalProperty('last_pos_time', pip_services3_commons_node_3.TypeCode.DateTime);
        this.withOptionalProperty('im_pos', null); // GeoJSON
        this.withOptionalProperty('im_time', pip_services3_commons_node_3.TypeCode.DateTime);
        this.withOptionalProperty('immobile', pip_services3_commons_node_3.TypeCode.Float);
        this.withOptionalProperty('expected', pip_services3_commons_node_3.TypeCode.Boolean);
        this.withOptionalProperty('connected', pip_services3_commons_node_3.TypeCode.Boolean);
        this.withOptionalProperty('online', pip_services3_commons_node_3.TypeCode.Float);
        this.withOptionalProperty('offline', pip_services3_commons_node_3.TypeCode.Float);
        this.withOptionalProperty('freezed', pip_services3_commons_node_3.TypeCode.Float);
        this.withOptionalProperty('pressed', pip_services3_commons_node_3.TypeCode.Boolean);
        this.withOptionalProperty('long_pressed', pip_services3_commons_node_3.TypeCode.Boolean);
        this.withOptionalProperty('power', pip_services3_commons_node_3.TypeCode.Boolean);
        this.withOptionalProperty('power_changed', pip_services3_commons_node_3.TypeCode.Boolean);
        this.withOptionalProperty('beacons', new pip_services3_commons_node_2.ArraySchema(pip_services3_commons_node_3.TypeCode.String));
        this.withOptionalProperty('assign_id', pip_services3_commons_node_3.TypeCode.String);
        this.withOptionalProperty('assign_time', pip_services3_commons_node_3.TypeCode.DateTime);
        this.withOptionalProperty('assigner', pip_services3_commons_node_3.TypeCode.Boolean);
        this.withOptionalProperty('assignee', pip_services3_commons_node_3.TypeCode.Boolean);
        this.withOptionalProperty('pos_time', pip_services3_commons_node_3.TypeCode.DateTime);
        this.withOptionalProperty('pos_rec', null); // GeoJSON
        this.withOptionalProperty('state_time', pip_services3_commons_node_3.TypeCode.DateTime);
        this.withOptionalProperty('attend_time', pip_services3_commons_node_3.TypeCode.DateTime);
        this.withOptionalProperty('attend_start', pip_services3_commons_node_3.TypeCode.DateTime);
        this.withOptionalProperty('group_ids', new pip_services3_commons_node_2.ArraySchema(pip_services3_commons_node_3.TypeCode.String));
        this.withOptionalProperty('zones', new pip_services3_commons_node_2.ArraySchema(new ZonePresenceV1Schema_1.ZonePresenceV1Schema()));
        this.withOptionalProperty('params', new pip_services3_commons_node_2.ArraySchema(new CurrentObjectStateDataValueV1Schema_1.CurrentObjectStateDataValueV1Schema()));
        this.withOptionalProperty('events', new pip_services3_commons_node_2.ArraySchema(new CurrentObjectStateDataValueV1Schema_1.CurrentObjectStateDataValueV1Schema()));
        this.withOptionalProperty('commands', new pip_services3_commons_node_2.ArraySchema(new CurrentObjectStateDataValueV1Schema_1.CurrentObjectStateDataValueV1Schema()));
        this.withOptionalProperty('states', new pip_services3_commons_node_2.ArraySchema(new CurrentObjectStateDataValueV1Schema_1.CurrentObjectStateDataValueV1Schema()));
        this.withOptionalProperty('extra', null);
    }
}
exports.CurrentObjectStateV1Schema = CurrentObjectStateV1Schema;
//# sourceMappingURL=CurrentObjectStateV1Schema.js.map