'use strict'

const Model = use('Model')

class Location extends Model {

    static get table() {
        return "locations";
    }

    static get primaryKey() {
        return "locationId";
    }

    person() {
        return this.belongsTo('App/Models/Person', 'person_id');
    }
}

module.exports = Location
