"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const CurrentObjectStatesCommandSet_1 = require("./CurrentObjectStatesCommandSet");
class CurrentObjectStatesController {
    constructor() {
        this._dependencyResolver = new pip_services3_commons_node_2.DependencyResolver(CurrentObjectStatesController._defaultConfig);
    }
    configure(config) {
        this._dependencyResolver.configure(config);
    }
    setReferences(references) {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired('persistence');
    }
    getCommandSet() {
        if (this._commandSet == null)
            this._commandSet = new CurrentObjectStatesCommandSet_1.CurrentObjectStatesCommandSet(this);
        return this._commandSet;
    }
    getStates(correlationId, filter, paging, callback) {
        this._persistence.getPageByFilter(correlationId, filter, paging, callback);
    }
    getStateById(correlationId, id, callback) {
        this._persistence.getOneById(correlationId, id, callback);
    }
    fixState(state) {
        if (_.isString(state.pos))
            state.pos = JSON.parse(state.pos);
        state.id = state.object_id || state.id;
        state.object_id = state.object_id || state.id;
        state.time = pip_services3_commons_node_3.DateTimeConverter.toNullableDateTime(state.time) || new Date();
        state.pos_time = pip_services3_commons_node_3.DateTimeConverter.toNullableDateTime(state.pos_time);
        state.last_pos_time = pip_services3_commons_node_3.DateTimeConverter.toNullableDateTime(state.last_pos_time);
        state.state_time = pip_services3_commons_node_3.DateTimeConverter.toNullableDateTime(state.state_time);
        state.rule_time = pip_services3_commons_node_3.DateTimeConverter.toNullableDateTime(state.rule_time);
        state.attend_time = pip_services3_commons_node_3.DateTimeConverter.toNullableDateTime(state.attend_time);
        state.attend_start = pip_services3_commons_node_3.DateTimeConverter.toNullableDateTime(state.attend_start);
    }
    setState(correlationId, state, callback) {
        this.fixState(state);
        this._persistence.set(correlationId, state, callback);
    }
    deleteStatesByFilter(correlationId, filter, callback) {
        this._persistence.deleteByFilter(correlationId, filter, callback);
    }
    deleteStateById(correlationId, id, callback) {
        this._persistence.deleteById(correlationId, id, callback);
    }
}
exports.CurrentObjectStatesController = CurrentObjectStatesController;
CurrentObjectStatesController._defaultConfig = pip_services3_commons_node_1.ConfigParams.fromTuples('dependencies.persistence', 'iqs-services-currobjectstates:persistence:*:*:1.0');
//# sourceMappingURL=CurrentObjectStatesController.js.map