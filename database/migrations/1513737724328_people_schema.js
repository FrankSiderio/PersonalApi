'use strict'

const Schema = use('Schema')

class PeopleSchema extends Schema {
  up () {
    this.create('people', (table) => {
      table.increments('personId')
      table.string('firstName')
      table.string('lastName')
      table.string('email')
      table.timestamps()
    })
  }

  down () {
    this.drop('people')
  }
}

module.exports = PeopleSchema
