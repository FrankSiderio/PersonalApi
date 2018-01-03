'use strict'

const Schema = use('Schema')

class WorkExperienceSchema extends Schema {
  up () {
    this.create('work_experiences', (table) => {
      table.increments('workId')
      table.string('position')
      table.string('preview')
      table.string('description')
      table.string('company')
      table.boolean('current')
      table.timestamp('started').nullable()
      table.timestamp('ended').nullable()
      table.integer('person_id')
      table.foreign('person_id').references('personId').on('people')
      table.string('imagePath')
      table.string('previewImagePath')
      table.string('url')
      table.timestamps()
    })
  }

  down () {
    this.drop('work_experiences')
  }
}

module.exports = WorkExperienceSchema
