'use strict'

const Model = use('Model')

class Person extends Model {

    static get table() {
        return "people";
    }

    static get primaryKey() {
        return "personId";
    }

    static get hidden() {
        return ['created_at', 'updated_at'];
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

    skills() {
        return this.hasMany('App/Models/Skill', 'personId');
    }

    workExperience() {
        return this.hasMany('App/Models/WorkExperience', 'personId');
    }

}

module.exports = Person
