const ProjectsService = {
    getAllProjects(knex) {
        return knex.select('*').from('projects')
    },
    getById(knex, id) {
        return knex
        .from('projects')
        .select('*')
        .where('id', id)
        .first();
    }
    
}

module.exports = ProjectsService