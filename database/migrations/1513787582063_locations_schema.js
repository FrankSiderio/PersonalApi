'use strict'

const Schema = use('Schema')

class LocationsSchema extends Schema {
  up () {
    this.create('locations', (table) => {
      table.increments('locationId')
      table.text('address')
      table.string('city')
      table.string('state')
      table.integer('personId')
      table.foreign('personId').references('personId').on('people')
      table.timestamps()
    })
  }

  down () {
    this.drop('locations')
  }
}

module.exports = LocationsSchema
