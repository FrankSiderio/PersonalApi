'use strict'

const Schema = use('Schema')

class InterestsSchema extends Schema {
  up () {
    this.create('interests', (table) => {
      table.increments('interestId')
      table.string('title')
      table.string('description')
      table.integer('person_id')
      table.foreign('person_id').references('personId').on('people')
      table.timestamps()
    })
  }

  down () {
    this.drop('interests')
  }
}

module.exports = InterestsSchema
