let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { CurrentObjectStateV1 } from '../../src/data/version1/CurrentObjectStateV1';

import { ICurrentObjectStatesPersistence } from '../../src/persistence/ICurrentObjectStatesPersistence';

let STATE1: CurrentObjectStateV1 = {
    id: '1',
    org_id: '1',
    object_id: '1',
    device_id: '1',
    time: new Date(),
    online: 0,
    immobile: 0
};
let STATE2: CurrentObjectStateV1 = {
    id: '2',
    org_id: '1',
    object_id: '2',
    device_id: '2',
    time: new Date(),
    online: 0,
    immobile: 0
};
let STATE3: CurrentObjectStateV1 = {
    id: '3',
    org_id: '2',
    object_id: '2',
    device_id: '3',
    time: new Date(new Date().getTime() + 1000),
    online: 0,
    immobile: 0
};

export class CurrentObjectStatesPersistenceFixture {
    private _persistence: ICurrentObjectStatesPersistence;
    
    constructor(persistence) {
        assert.isNotNull(persistence);
        this._persistence = persistence;
    }

    private testSetCurrentObjectStates(done) {
        async.series([
        // Create one state
            (callback) => {
                this._persistence.set(
                    null,
                    STATE1,
                    (err, state) => {
                        assert.isNull(err);

                        assert.isObject(state);
                        assert.equal(state.org_id, STATE1.org_id);
                        assert.equal(state.device_id, STATE1.device_id);

                        callback();
                    }
                );
            },
        // Create another state
            (callback) => {
                this._persistence.set(
                    null,
                    STATE2,
                    (err, state) => {
                        assert.isNull(err);

                        assert.isObject(state);
                        assert.equal(state.org_id, STATE2.org_id);
                        assert.equal(state.device_id, STATE2.device_id);

                        callback();
                    }
                );
            },
        // Create yet another state
            (callback) => {
                this._persistence.create(
                    null,
                    STATE3,
                    (err, state) => {
                        assert.isNull(err);

                        assert.isObject(state);
                        assert.equal(state.org_id, STATE3.org_id);
                        assert.equal(state.device_id, STATE3.device_id);

                        callback();
                    }
                );
            }
        ], done);
    }
                
    public testCrudOperations(done) {
        let state1: CurrentObjectStateV1;

        async.series([
        // Create items
            (callback) => {
                this.testSetCurrentObjectStates(callback);
            },
        // Get all states
            (callback) => {
                this._persistence.getPageByFilter(
                    null,
                    new FilterParams(),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 3);

                        state1 = page.data[0];

                        callback();
                    }
                );
            },
        // Update the state
            (callback) => {
                state1.device_id = '5';
                state1.immobile = 10;

                this._persistence.set(
                    null,
                    state1,
                    (err, state) => {
                        assert.isNull(err);

                        assert.isObject(state);
                        assert.equal(state.device_id, '5');
                        assert.equal(state.immobile, 10);
                        assert.equal(state.id, state1.id);

                        callback();
                    }
                );
            },
        // Delete state
            (callback) => {
                this._persistence.deleteById(
                    null,
                    state1.id,
                    (err, state) => {
                        assert.isNull(err);

                        assert.isNotNull(state);
                        assert.equal(state.id, state1.id);

                        callback();
                    }
                )
            },
        // Try to get deleted state by id
            (callback) => {
                this._persistence.getOneById(
                    null,
                    state1.id,
                    (err, state) => {
                        assert.isNull(err);

                        assert.isNull(state || null);

                        callback();
                    }
                )
            }
        ], done);
    }

    public testGetWithFilter(done) {
        async.series([
        // Create states
            (callback) => {
                this.testSetCurrentObjectStates(callback);
            },
        // Get states filtered by organization
            (callback) => {
                this._persistence.getPageByFilter(
                    null,
                    FilterParams.fromValue({
                        org_id: '1'
                    }),
                    new PagingParams(),
                    (err, states) => {
                        assert.isNull(err);

                        assert.isObject(states);
                        assert.lengthOf(states.data, 2);

                        callback();
                    }
                );
            },
        // Get states by device id
            (callback) => {
                this._persistence.getPageByFilter(
                    null,
                    FilterParams.fromValue({
                        device_id: '1'
                    }),
                    new PagingParams(),
                    (err, states) => {
                        assert.isNull(err);

                        assert.isObject(states);
                        assert.lengthOf(states.data, 1);

                        callback();
                    }
                );
            },
        // Get states filtered by time
            (callback) => {
                this._persistence.getPageByFilter(
                    null,
                    FilterParams.fromValue({
                       from_time: STATE3.time
                    }),
                    new PagingParams(),
                    (err, states) => {
                        assert.isNull(err);

                        assert.isObject(states);
                        assert.lengthOf(states.data, 1);

                        callback();
                    }
                );
            },
        ], done);
    }

}
