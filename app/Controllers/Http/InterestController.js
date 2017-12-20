'use strict'

const Interest = use('App/Models/Interest')

class InterestController {
    /**
     * Returns the interests of a given person
     * @param  {integer}  params
     * @return
     */
    async show({params}) {
        return Interest.query()
                       .where('person_id', params.personId)
                       .fetch()
    }
}

module.exports = InterestController
