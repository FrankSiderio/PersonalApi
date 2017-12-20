'use strict'

const Model = use('Model')

class Major extends Model {
    static get table() {
        return "majors";
    }

    static get primaryKey() {
        return "majorId";
    }
}

module.exports = Major
