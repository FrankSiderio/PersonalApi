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

    interests() {
        return this.hasMany('App/Models/Interest', 'personId');
    }

    locations() {
        return this.hasMany('App/Models/Location', 'personId');
    }

}

module.exports = Person
