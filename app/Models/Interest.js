'use strict'

const Model = use('Model')

class Interest extends Model {
    static get table() {
        return "interests";
    }

    static get primaryKey() {
        return "interestId";
    }
}

module.exports = Interest
