'use strict'

const Skill = use('App/Models/Skill')

class SkillController {
    /**
     * Returns the skills for a given person
     * @param  {integer}  params
     * @return 
     */
    async show({params}) {
        return Skill.query()
                    .where('person_id', params.personId)
                    .fetch()
    }
}

module.exports = SkillController
