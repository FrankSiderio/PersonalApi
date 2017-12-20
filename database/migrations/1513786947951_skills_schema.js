'use strict'

const Schema = use('Schema')

class SkillsSchema extends Schema {
  up () {
    this.create('skills', (table) => {
      table.increments('skillId')
      table.string('skill')
      table.string('description').nullable()
      table.integer('person_id')
      table.foreign('person_id').references('personId').on('people')
      table.timestamps()
    })
  }

  down () {
    this.drop('skills')
  }
}

module.exports = SkillsSchema
