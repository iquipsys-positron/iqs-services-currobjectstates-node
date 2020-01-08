import { ConfigParams } from 'pip-services3-commons-node';

import { CurrentObjectStatesFilePersistence } from '../../src/persistence/CurrentObjectStatesFilePersistence';
import { CurrentObjectStatesPersistenceFixture } from './CurrentObjectStatesPersistenceFixture';

suite('CurrentObjectStatesFilePersistence', ()=> {
    let persistence: CurrentObjectStatesFilePersistence;
    let fixture: CurrentObjectStatesPersistenceFixture;
    
    setup((done) => {
        persistence = new CurrentObjectStatesFilePersistence('./data/curr_obj_states.test.json');

        fixture = new CurrentObjectStatesPersistenceFixture(persistence);

        persistence.open(null, (err) => {
            persistence.clear(null, done);
        });
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