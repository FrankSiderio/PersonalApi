'use strict'

const Project = use('App/Models/Project')

class ProjectController {

    async show({params}) {
        const projects =  await Project.query()
                                       .where('person_id', params.personId)
                                       .fetch()
        return {
            projects: projects
        }
    }

}

module.exports = ProjectController
