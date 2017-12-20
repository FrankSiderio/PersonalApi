'use strict'

const Model = use('Model')

class WorkExperience extends Model {
    static get table() {
        return "work_experiences";
    }

    static get primaryKey() {
        return "workId";
    }
}

module.exports = WorkExperience
