import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';

import { CurrentObjectStatesMongoDbPersistence } from '../persistence/CurrentObjectStatesMongoDbPersistence';
import { CurrentObjectStatesFilePersistence } from '../persistence/CurrentObjectStatesFilePersistence';
import { CurrentObjectStatesMemoryPersistence } from '../persistence/CurrentObjectStatesMemoryPersistence';
import { CurrentObjectStatesController } from '../logic/CurrentObjectStatesController';
import { CurrentObjectStatesHttpServiceV1 } from '../services/version1/CurrentObjectStatesHttpServiceV1';

export class CurrentObjectStatesServiceFactory extends Factory {
	public static Descriptor = new Descriptor("iqs-services-currobjectstates", "factory", "default", "default", "1.0");
	public static MemoryPersistenceDescriptor = new Descriptor("iqs-services-currobjectstates", "persistence", "memory", "*", "1.0");
	public static FilePersistenceDescriptor = new Descriptor("iqs-services-currobjectstates", "persistence", "file", "*", "1.0");
	public static MongoDbPersistenceDescriptor = new Descriptor("iqs-services-currobjectstates", "persistence", "mongodb", "*", "1.0");
	public static ControllerDescriptor = new Descriptor("iqs-services-currobjectstates", "controller", "default", "*", "1.0");
	public static HttpServiceDescriptor = new Descriptor("iqs-services-currobjectstates", "service", "http", "*", "1.0");
	
	constructor() {
		super();
		this.registerAsType(CurrentObjectStatesServiceFactory.MemoryPersistenceDescriptor, CurrentObjectStatesMemoryPersistence);
		this.registerAsType(CurrentObjectStatesServiceFactory.FilePersistenceDescriptor, CurrentObjectStatesFilePersistence);
		this.registerAsType(CurrentObjectStatesServiceFactory.MongoDbPersistenceDescriptor, CurrentObjectStatesMongoDbPersistence);
		this.registerAsType(CurrentObjectStatesServiceFactory.ControllerDescriptor, CurrentObjectStatesController);
		this.registerAsType(CurrentObjectStatesServiceFactory.HttpServiceDescriptor, CurrentObjectStatesHttpServiceV1);
	}
	
}
