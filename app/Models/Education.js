'use strict'

const Model = use('Model')

class Education extends Model {

    static get table() {
        return "educations";
    }

    static get primaryKey() {
        return "educationId";
    }

    person() {
        return this.belongsTo('App/Models/Person', 'personId');
    }

    majors() {
        return this.hasMany('App/Models/EducationMajor', 'educationId');
    }
}

module.exports = Education
