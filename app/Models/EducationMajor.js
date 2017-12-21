'use strict'

const Model = use('Model')

class EducationMajor extends Model {

    static get table() {
        return "education_major";
    }

    static get hidden() {
        return ['education_id', 'major_id'];
    }

    education() {
        return this.belongsTo('App/Models/Education', 'educationId');
    }

    major() {
        return this.belongsTo('App/Models/Major', 'major_id');
    }
}

module.exports = EducationMajor
