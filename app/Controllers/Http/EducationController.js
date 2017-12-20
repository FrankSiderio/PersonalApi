'use strict'

const Education = use('App/Models/Education')

class EducationController {
    async show({params}) {
        return Education.query()
                        .with('majors.major')
                        .where('person_id', params.personId)
                        .fetch()
    }
}

module.exports = EducationController
