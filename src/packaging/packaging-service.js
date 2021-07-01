const PackagingService = {
    getAllPackaging(knex) {
        return knex.select('*').from('packaging')
    },
    getPackagingById(knex) {
        return knex
            .from('packaging')
            .select("*")
            .where('id', id)
    },
    getBottles(knex) {
        return knex('packaging').where('category', 'bottles')
    },
    getDroppers(knex) {
        return knex('packaging').where('category', 'droppers')
    }
}

module.exports = PackagingService