'use strict'

const WorkExperience = use('App/Models/WorkExperience')

class WorkExperienceController {
    /**
     * Returns the work experience for a given person
     * @param  {integer}  params
     * @return
     */
    async show({params}) {
        return WorkExperience.query()
                             .where('person_id', params.personId)
                             .fetch()
    }
}

module.exports = WorkExperienceController
