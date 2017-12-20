'use strict'

const Schema = use('Schema')

class LocationsSchema extends Schema {
  up () {
    this.create('locations', (table) => {
      table.increments('locationId')
      table.string('address')
      table.string('city')
      table.string('state')
      table.integer('person_id')
      table.foreign('person_id').references('personId').on('people')
      table.timestamps()
    })
  }

  down () {
    this.drop('locations')
  }
}

module.exports = LocationsSchema
