'use strict'

const Schema = use('Schema')

class ProjectsSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments('projectId')
      table.string('name')
      table.string('description')
      table.string('imagePath')
      table.integer('person_id')
      table.foreign('person_id').references('personId').on('people')
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectsSchema
