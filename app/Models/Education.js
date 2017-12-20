'use strict'

const Model = use('Model')

class Education extends Model {
    static get table() {
        return "educations";
    }

    static get primaryKey() {
        return "educationId";
    }
}

module.exports = Education
