'use strict'

const Schema = use('Schema')

class EducationMajorSchema extends Schema {
  up () {
    this.create('education_majors', (table) => {
        table.integer('educationId')
        table.foreign('educationId').references('educationId').on('educations')
        table.integer('majorId')
        table.foreign('majorId').references('majorId').on('majors')
    })
  }

  down () {
    this.drop('education_majors')
  }
}

module.exports = EducationMajorSchema
