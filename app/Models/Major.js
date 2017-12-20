'use strict'

const Model = use('Model')

class Major extends Model {

    static get table() {
        return "majors";
    }

    static get primaryKey() {
        return "majorId";
    }

    educations() {
        return this.hasMany('App/Models/EducationMajor', 'majorId');
    }

}

module.exports = Major
