'use strict'

const Model = use('Model')

class Interest extends Model {

    static get table() {
        return "interests";
    }

    static get primaryKey() {
        return "interestId";
    }

    static get hidden() {
        return ['interestId', 'created_at', 'updated_at', 'person_id'];
    }

    person() {
        return this.belongsTo('App/Models/Person', 'person_id');
    }
}

module.exports = Interest
