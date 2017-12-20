'use strict'

const Model = use('Model')

class WorkExperience extends Model {

    static get table() {
        return "work_experiences";
    }

    static get primaryKey() {
        return "workId";
    }

    person() {
        return this.belongsTo('App/Models/Person', 'person_id');
    }
}

module.exports = WorkExperience
