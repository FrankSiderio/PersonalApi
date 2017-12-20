'use strict'

const Model = use('Model')

class Interest extends Model {

    static get table() {
        return "interests";
    }

    static get primaryKey() {
        return "interestId";
    }

    person() {
        return this.belongsTo('App/Models/Person', 'person_id');
    }
}

module.exports = Interest
