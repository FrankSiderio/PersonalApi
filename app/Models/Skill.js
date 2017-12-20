'use strict'

const Model = use('Model')

class Skill extends Model {

    static get table() {
        return "skills";
    }

    static get primaryKey() {
        return "skillId";
    }

    person() {
        return this.belongsTo('App/Models/Person', 'person_id');
    }
}

module.exports = Skill
