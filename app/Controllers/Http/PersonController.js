'use strict'

const Person = use('App/Models/Person')

class PersonController {
    /**
     * Returns all the people
     * @return {Promise}
     */
    async index() {
        return Person.all();
    }

    /**
     * Returns a specific person
     * @param  {integer}  params
     * @return
     */
    async show({params}) {
        return Person.query()
                     .with('interests')
                     .where('personId', params.personId)
                     .fetch()
    }

}

module.exports = PersonController
