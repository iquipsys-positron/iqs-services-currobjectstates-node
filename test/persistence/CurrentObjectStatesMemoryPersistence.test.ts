import { ConfigParams } from 'pip-services3-commons-node';

import { CurrentObjectStatesMemoryPersistence } from '../../src/persistence/CurrentObjectStatesMemoryPersistence';
import { CurrentObjectStatesPersistenceFixture } from './CurrentObjectStatesPersistenceFixture';

suite('CurrentObjectStatesMemoryPersistence', ()=> {
    let persistence: CurrentObjectStatesMemoryPersistence;
    let fixture: CurrentObjectStatesPersistenceFixture;
    
    setup((done) => {
        persistence = new CurrentObjectStatesMemoryPersistence();
        persistence.configure(new ConfigParams());
        
        fixture = new CurrentObjectStatesPersistenceFixture(persistence);
        
        persistence.open(null, done);
    });
    
    teardown((done) => {
        persistence.close(null, done);
    });
        
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Get with Filters', (done) => {
        fixture.testGetWithFilter(done);
    });

});