'use strict'

const Schema = use('Schema')

class EducationsSchema extends Schema {
  up () {
    this.create('educations', (table) => {
      table.increments('educationId')
      table.string('school')
      table.string('address')
      table.integer('person_id')
      table.foreign('person_id').references('personId').on('people')
      table.timestamps()
    })
  }

  down () {
    this.drop('educations')
  }
}

module.exports = EducationsSchema
