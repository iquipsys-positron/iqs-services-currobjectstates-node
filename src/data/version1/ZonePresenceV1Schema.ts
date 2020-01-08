import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

export class ZonePresenceV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withRequiredProperty('org_id', TypeCode.String);
        this.withRequiredProperty('duration', TypeCode.Float);
        this.withOptionalProperty('entered', TypeCode.Boolean);
        this.withOptionalProperty('exited', TypeCode.Boolean);
    }
}
