import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

import { ZonePresenceV1Schema } from './ZonePresenceV1Schema';
import { CurrentObjectStateDataValueV1Schema } from './CurrentObjectStateDataValueV1Schema';

export class CurrentObjectStateV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withOptionalProperty('id', TypeCode.String);
        this.withRequiredProperty('org_id', TypeCode.String);
        this.withOptionalProperty('object_id', TypeCode.String);
        this.withOptionalProperty('device_id', TypeCode.String);
        this.withOptionalProperty('time', TypeCode.DateTime);

        this.withOptionalProperty('pos', null); // GeoJSON
        this.withOptionalProperty('alt', TypeCode.Float);
        this.withOptionalProperty('angle', TypeCode.Float);
        this.withOptionalProperty('speed', TypeCode.Float);

        this.withOptionalProperty('last_pos', null); // GeoJSON
        this.withOptionalProperty('last_pos_time', TypeCode.DateTime);

        this.withOptionalProperty('im_pos', null); // GeoJSON
        this.withOptionalProperty('im_time', TypeCode.DateTime);
        this.withOptionalProperty('immobile', TypeCode.Float);
        
        this.withOptionalProperty('expected', TypeCode.Boolean);
        this.withOptionalProperty('connected', TypeCode.Boolean);
        this.withOptionalProperty('online', TypeCode.Float);
        this.withOptionalProperty('offline', TypeCode.Float);
        this.withOptionalProperty('freezed', TypeCode.Float);
        this.withOptionalProperty('pressed', TypeCode.Boolean);
        this.withOptionalProperty('long_pressed', TypeCode.Boolean);
        this.withOptionalProperty('power', TypeCode.Boolean);
        this.withOptionalProperty('power_changed', TypeCode.Boolean);
        this.withOptionalProperty('beacons', new ArraySchema(TypeCode.String));

        this.withOptionalProperty('assign_id', TypeCode.String);
        this.withOptionalProperty('assign_time', TypeCode.DateTime);
        this.withOptionalProperty('assigner', TypeCode.Boolean);
        this.withOptionalProperty('assignee', TypeCode.Boolean);
        
        this.withOptionalProperty('pos_time', TypeCode.DateTime);
        this.withOptionalProperty('pos_rec', null); // GeoJSON
        this.withOptionalProperty('state_time', TypeCode.DateTime);
        this.withOptionalProperty('attend_time', TypeCode.DateTime);
        this.withOptionalProperty('attend_start', TypeCode.DateTime);
        
        this.withOptionalProperty('group_ids', new ArraySchema(TypeCode.String));
        this.withOptionalProperty('zones', new ArraySchema(new ZonePresenceV1Schema()));

        this.withOptionalProperty('params', new ArraySchema(new CurrentObjectStateDataValueV1Schema()));
        this.withOptionalProperty('events', new ArraySchema(new CurrentObjectStateDataValueV1Schema()));
        this.withOptionalProperty('commands', new ArraySchema(new CurrentObjectStateDataValueV1Schema()));
        this.withOptionalProperty('states', new ArraySchema(new CurrentObjectStateDataValueV1Schema()));

        this.withOptionalProperty('extra', null);
    }
}
