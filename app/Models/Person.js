'use strict'

const Model = use('Model')

class Person extends Model {
    static get table() {
        return "people";
    }

    static get primaryKey() {
        return "pid";
    }
}

module.exports = Person
