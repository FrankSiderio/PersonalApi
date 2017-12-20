'use strict'

const Model = use('Model')

class Person extends Model {

    static get table() {
        return "people";
    }

    static get primaryKey() {
        return "personId";
    }

    educations() {
        return this.hasMany('App/Models/Education', 'personId');
    }

}

module.exports = Person
