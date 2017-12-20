'use strict'

const Schema = use('Schema')

class EducationsSchema extends Schema {
  up () {
    this.create('educations', (table) => {
      table.increments('educationId')
      table.string('school')
      table.integer('personId')
      table.foreign('personId').references('personId').on('people')
      table.timestamps()
    })
  }

  down () {
    this.drop('educations')
  }
}

module.exports = EducationsSchema
