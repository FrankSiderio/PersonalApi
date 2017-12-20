'use strict'

const Model = use('Model')

class EducationMajor extends Model {

    static get table() {
        return "education_major";
    }

    education() {
        return this.belongsTo('App/Models/Education', 'educationId');
    }

    major() {
        return this.belongsTo('App/Models/Major', 'major_id');
    }
}

module.exports = EducationMajor
