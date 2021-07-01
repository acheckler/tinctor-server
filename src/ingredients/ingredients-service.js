const IngredientsService = {
    getAllIngredients(knex) {
        return knex.select('*').from('ingredients')
    },
    getCannabinoids(knex) {
        return knex('ingredients').where('category', 'cannabinoid')
    },
    getCarriers(knex) {
        return knex('ingredients').where('category', 'carrier')
    },
    getFlavors(knex) {
        return knex('ingredients').where('category', 'flavor')
    },
    getIngredientById(knex, id) {
        return knex
            .from('ingredients')
            .select('*')
            .where('id', id)
    }
}


module.exports = IngredientsService