'use strict'

const Schema = use('Schema')

class SkillsSchema extends Schema {
  up () {
    this.create('skills', (table) => {
      table.increments('skillId')
      table.string('title')
      table.string('description').nullable()
      table.integer('personId')
      table.foreign('personId').references('personId').on('people')
      table.timestamps()
    })
  }

  down () {
    this.drop('skills')
  }
}

module.exports = SkillsSchema
