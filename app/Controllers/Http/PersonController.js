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
        const person =  await Person.query()
                                    .with('interests')
                                    .with('locations')
                                    .with('skills')
                                    .with('workExperience')
                                    .where('personId', params.personId)
                                    .fetch()
        return {
            person: person
        }
    }

}

module.exports = PersonController
