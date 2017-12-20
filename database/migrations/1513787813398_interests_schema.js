'use strict'

const Schema = use('Schema')

class InterestsSchema extends Schema {
  up () {
    this.create('interests', (table) => {
      table.increments('interestId')
      table.string('title')
      table.string('description')
      table.integer('personId')
      table.foreign('personId').references('personId').on('people')
      table.timestamps()
    })
  }

  down () {
    this.drop('interests')
  }
}

module.exports = InterestsSchema
