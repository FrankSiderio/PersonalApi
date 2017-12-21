'use strict'

const Model = use('Model')

class Feedback extends Model {

    static get table() {
        return "feedbacks";
    }

    static get primaryKey() {
        return "feedbackId";
    }
}

module.exports = Feedback
