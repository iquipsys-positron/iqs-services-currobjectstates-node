import { IStringIdentifiable } from 'pip-services3-commons-node';

import { ZonePresenceV1 } from './ZonePresenceV1';
import { CurrentObjectStateDataValueV1 } from './CurrentObjectStateDataValueV1';

export class CurrentObjectStateV1 implements IStringIdentifiable {
    public id: string;
    public org_id: string;
    public object_id?: string;
    public device_id?: string;
    public time: Date;

    public pos?: any; // GeoJSON
    public alt?: number;
    public angle?: number;
    public speed?: number;

    public last_pos?: any;
    public last_pos_time?: Date;

    public im_pos?: any;
    public im_time?: Date;
    public immobile?: number; // In seconds
    
    public expected?: boolean;
    public connected?: boolean;
    public online: number; // In seconds
    public offline?: number; // In seconds
    public freezed?: number; // In seconds
    public pressed?: boolean;
    public long_pressed?: boolean;
    public power?: boolean;
    public power_changed?: boolean;
    public beacons?: string[];

    public assign_id?: string;
    public assign_time?: Date;
    public assigner?: boolean;
    public assignee?: boolean;
    
    public pos_time?: Date;
    public pos_rec?: any; // GeoJSON
    public state_time?: Date;
    public rule_time?: Date;
    public attend_time?: Date;
    public attend_start?: Date;
    
    public group_ids?: string[];
    public zones?: ZonePresenceV1[];

    public params?: CurrentObjectStateDataValueV1[];
    public events?: CurrentObjectStateDataValueV1[];
    public commands?: CurrentObjectStateDataValueV1[];
    public states?: CurrentObjectStateDataValueV1[];

    public extra?: any;
}