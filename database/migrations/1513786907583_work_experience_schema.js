'use strict'

const Schema = use('Schema')

class WorkExperienceSchema extends Schema {
  up () {
    this.create('work_experiences', (table) => {
      table.increments('wid')
      table.string('position')
      table.string('description')
      table.string('company')
      table.boolean('current')
      table.timestamp('started').nullable()
      table.timestamp('ended').nullable()
      table.integer('personId')
      table.foreign('personId').references('personId').on('people')
      table.timestamps()
    })
  }

  down () {
    this.drop('work_experiences')
  }
}

module.exports = WorkExperienceSchema
