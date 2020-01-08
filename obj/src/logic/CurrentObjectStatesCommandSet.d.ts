import { CommandSet } from 'pip-services3-commons-node';
import { ICurrentObjectStatesController } from './ICurrentObjectStatesController';
export declare class CurrentObjectStatesCommandSet extends CommandSet {
    private _logic;
    constructor(logic: ICurrentObjectStatesController);
    private makeGetStatesCommand;
    private makeGetStateByIdCommand;
    private makeSetStateCommand;
    private makeDeleteStatesByFilterCommand;
    private makeDeleteStateByIdCommand;
}
