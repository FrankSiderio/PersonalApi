'use strict'

const Model = use('Model')

class EducationMajor extends Model {
    static get table() {
        return "education_major";
    }
}

module.exports = EducationMajor
