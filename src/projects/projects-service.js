const ProjectsService = {
    getAllProjects(knex) {
        return knex.select('*').from('projects')
    },
    getById(knex, id) {
        return knex
        .from('projects')
        .where('id', id)
        .returning('*')
        .first()
        
    },
    getForDisplay(knex) {
        return knex('projects')
            .select(
                'projects.name',
                'projects.id',
                'projects.t_volume',
                'i1.name as canna_name',
                'i1.ppg as canna_ppg',
                'projects.canna_concentration',
                'i2.name as carrier_name',
                'i2.ppg as carrier_ppg',
                'projects.carrier_percentage',
                'i3.name as flavor_name',
                'i3.ppg as flavor_ppg',
                'pa1.name as bottle_name',
                'pa1.cpu as bottle_cpu',
                'pa2.name as dropper_name',
                'pa2.cpu as dropper_cpu',
                'projects.total_cpu')
            .innerJoin('ingredients as i1', 'projects.canna_id', 'i1.id')
            .innerJoin('ingredients as i2', 'projects.carrier_id', 'i2.id')
            .innerJoin('ingredients as i3', 'projects.flavor_id', 'i3.id')
            .innerJoin('packaging as pa1', 'projects.bottle_id', 'pa1.id')
            .innerJoin('packaging as pa2', 'projects.dropper_id', 'pa2.id')
    },
    insertProject(knex, newProject) {
        return knex
            .insert(newProject)
            .into('projects')
            .returning('*')
            .then((rows) => {
                console.log(rows)
                return rows[0]
            })
    },
    deleteProject(knex, id) {
        return knex('projects')
            .where({id})
            .delete()
    }
    
}

module.exports = ProjectsService
