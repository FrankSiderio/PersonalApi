'use strict'

const WorkExperience = use('App/Models/WorkExperience')

class WorkExperienceController {
    /**
     * Returns the work experience for a given person
     * @param  {integer}  params
     * @return {promise}
     */
    async show({params}) {
        const workExperience = await WorkExperience.query()
                                                   .where('person_id', params.personId)
                                                   .fetch();
        return {
            workExperience: workExperience
        }
    }
}

module.exports = WorkExperienceController
