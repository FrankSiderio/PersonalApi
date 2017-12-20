'use strict'

const WorkExperience = use('App/Models/WorkExperience')

class WorkExperienceController {

    async show({params}) {
        return WorkExperience.query()
                             .where('person_id', params.personId)
                             .fetch()
    }
}

module.exports = WorkExperienceController
