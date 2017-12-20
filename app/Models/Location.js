'use strict'

const Model = use('Model')

class Location extends Model {
    static get table() {
        return "locations";
    }

    static get primaryKey() {
        return "locationId";
    }
}

module.exports = Location
