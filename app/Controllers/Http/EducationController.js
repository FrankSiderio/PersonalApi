'use strict'

const Education = use('App/Models/Education')

class EducationController {
    /**
     * Returns all the educations of a given person
     * @param  {integer}  params
     * @return 
     */
    async show({params}) {
        return Education.query()
                        .with('majors.major')
                        .where('person_id', params.personId)
                        .fetch()
    }
}

module.exports = EducationController
