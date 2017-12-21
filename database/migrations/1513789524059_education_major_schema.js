'use strict'

const Schema = use('Schema')

class EducationMajorSchema extends Schema {
  up () {
    this.create('education_major', (table) => {
        table.integer('education_id')
        table.foreign('education_id').references('educationId').on('educations')
        table.integer('major_id')
        table.foreign('major_id').references('majorId').on('majors')
        table.boolean('isMinor')
    })
  }

  down () {
    this.drop('education_major')
  }
}

module.exports = EducationMajorSchema
