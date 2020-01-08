export class ZonePresenceV1 {
    public zone_id: string;
    public duration: number; // in seconds
    public entered?: boolean;
    public exited?: boolean;
}