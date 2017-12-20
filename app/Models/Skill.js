'use strict'

const Model = use('Model')

class Skill extends Model {
    static get table() {
        return "skills";
    }

    static get primaryKey() {
        return "skillId";
    }
}

module.exports = Skill
