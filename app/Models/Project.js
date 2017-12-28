'use strict'

const Model = use('Model')

class Project extends Model {

    static get table() {
        return "projects";
    }

    static get primaryKey() {
        return "projectId";
    }

    static get hidden() {
        return ['projectId', 'created_at', 'updated_at'];
    }

    person() {
        return this.belongsTo('App/Models/Person', 'person_id');
    }
}

module.exports = Project
