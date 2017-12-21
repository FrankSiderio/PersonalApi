'use strict'

const Model = use('Model')

class Location extends Model {

    static get table() {
        return "locations";
    }

    static get primaryKey() {
        return "locationId";
    }

    static get hidden() {
        return ['locationId', 'person_id', 'created_at', 'updated_at'];
    }

    person() {
        return this.belongsTo('App/Models/Person', 'person_id');
    }
}

module.exports = Location
