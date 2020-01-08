"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const CurrentObjectStatesMongoDbPersistence_1 = require("../persistence/CurrentObjectStatesMongoDbPersistence");
const CurrentObjectStatesFilePersistence_1 = require("../persistence/CurrentObjectStatesFilePersistence");
const CurrentObjectStatesMemoryPersistence_1 = require("../persistence/CurrentObjectStatesMemoryPersistence");
const CurrentObjectStatesController_1 = require("../logic/CurrentObjectStatesController");
const CurrentObjectStatesHttpServiceV1_1 = require("../services/version1/CurrentObjectStatesHttpServiceV1");
class CurrentObjectStatesServiceFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(CurrentObjectStatesServiceFactory.MemoryPersistenceDescriptor, CurrentObjectStatesMemoryPersistence_1.CurrentObjectStatesMemoryPersistence);
        this.registerAsType(CurrentObjectStatesServiceFactory.FilePersistenceDescriptor, CurrentObjectStatesFilePersistence_1.CurrentObjectStatesFilePersistence);
        this.registerAsType(CurrentObjectStatesServiceFactory.MongoDbPersistenceDescriptor, CurrentObjectStatesMongoDbPersistence_1.CurrentObjectStatesMongoDbPersistence);
        this.registerAsType(CurrentObjectStatesServiceFactory.ControllerDescriptor, CurrentObjectStatesController_1.CurrentObjectStatesController);
        this.registerAsType(CurrentObjectStatesServiceFactory.HttpServiceDescriptor, CurrentObjectStatesHttpServiceV1_1.CurrentObjectStatesHttpServiceV1);
    }
}
exports.CurrentObjectStatesServiceFactory = CurrentObjectStatesServiceFactory;
CurrentObjectStatesServiceFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-currobjectstates", "factory", "default", "default", "1.0");
CurrentObjectStatesServiceFactory.MemoryPersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-currobjectstates", "persistence", "memory", "*", "1.0");
CurrentObjectStatesServiceFactory.FilePersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-currobjectstates", "persistence", "file", "*", "1.0");
CurrentObjectStatesServiceFactory.MongoDbPersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-currobjectstates", "persistence", "mongodb", "*", "1.0");
CurrentObjectStatesServiceFactory.ControllerDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-currobjectstates", "controller", "default", "*", "1.0");
CurrentObjectStatesServiceFactory.HttpServiceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-currobjectstates", "service", "http", "*", "1.0");
//# sourceMappingURL=CurrentObjectStatesServiceFactory.js.map