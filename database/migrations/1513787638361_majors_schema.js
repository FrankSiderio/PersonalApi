'use strict'

const Schema = use('Schema')

class MajorsSchema extends Schema {
  up () {
    this.create('majors', (table) => {
      table.increments('majorId')
      table.string('major')
      table.timestamps()
    })
  }

  down () {
    this.drop('majors')
  }
}

module.exports = MajorsSchema
