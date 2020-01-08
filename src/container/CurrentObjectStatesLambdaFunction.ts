import { Descriptor } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { CommandableLambdaFunction } from 'pip-services3-aws-node';

import { CurrentObjectStatesServiceFactory } from '../build/CurrentObjectStatesServiceFactory';

export class CurrentObjectStatesLambdaFunction extends CommandableLambdaFunction {
    public constructor() {
        super("curr_object_states", "Current object states function");
        this._factories.add(new CurrentObjectStatesServiceFactory);
        this._dependencyResolver.put('controller', new Descriptor('iqs-services-currobjectstates', 'controller', 'default', '*', '*'));
    }

    public getReferences(): IReferences {
        return this._references;
    }
}

export const handler = new CurrentObjectStatesLambdaFunction().getHandler();