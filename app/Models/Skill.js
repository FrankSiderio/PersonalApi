'use strict'

const Model = use('Model')

class Skill extends Model {

    static get table() {
        return "skills";
    }

    static get primaryKey() {
        return "skillId";
    }

    static get hidden() {
        return ['skillId', 'person_id', 'created_at', 'updated_at'];
    }

    person() {
        return this.belongsTo('App/Models/Person', 'person_id');
    }
}

module.exports = Skill
