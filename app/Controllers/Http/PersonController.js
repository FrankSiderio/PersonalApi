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
        return await Person.find(params.pid);
    }

}

module.exports = PersonController
