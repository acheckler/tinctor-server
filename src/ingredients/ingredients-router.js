const express = require("express");
const IngredientsService = require("./ingredients-service")

const ingredientsRouter = express.Router();
ingredientsRouter.route('/').get((req, res, next) => {
    IngredientsService.getAllIngredients(req.app.get('db'))
    .then((ingredients) => {
        if (ingredients.length !== 0) {
            ingredients = ingredients.map((ingredient) => {
                return {
                    id: ingredient.id,
                    name: ingredient.name,
                    ppg: ingredient.ppg,
                    category: ingredient.category
                }
            })
        }
        return ingredients
    })
    .then((ingredients) => res.status(200).json(ingredients))
    .catch(next)
});

ingredientsRouter.route('/:id')
.all((req, res, next) => {
    const knexInstance = req.app.get('db')
    IngredientsService.getIngredientById(knexInstance, req.params.id)
      .then(ingredient => {
        if (!ingredient) {
          return res.status(404).json({
            error: { message: `ingredient doesn't exist` }
          })
        }
        res.ingredient = ingredient 
        next() 
      })
      .catch(next)
  })
  .get((req, res, next) => {    
    res.json((res.ingredient))      
  })

ingredientsRouter.route('/cannabinoids').get((req, res, next) => {
    IngredientsService.getCannabinoids(req.app.get('db'))
    .then((cannabinoids) => {
        if (cannabinoids.length !== 0) {
            cannabinoids = cannabinoids.map((cannabinoid) => {
                return {
                    id: cannabinoid.id,
                    name: cannabinoid.name,
                    ppg: cannabinoid.ppg,
                }
            })
        }
        return cannabinoids
    })
    .then((cannabinoids) => res.status(200).json(cannabinoids))
    .catch(next);
});

ingredientsRouter.route('/carriers').get((req, res, next) => {
    IngredientsService.getCarriers(req.app.get('db'))
    .then((carriers) => {
        if (carriers.length !== 0) {
            carriers = carriers.map((carrier) => {
                return {
                    id: carrier.id,
                    name: carrier.name,
                    ppg: carrier.ppg
                }
            })
        }
        return carriers
    })
    .then((carriers) => res.status(200).json(carriers))
    .catch(next)
})

ingredientsRouter.route('/flavors').get((req, res, next) => {
    IngredientsService.getFlavors(req.app.get('db'))
    .then((flavors) => {
        if (flavors.length !== 0) {
            flavors = flavors.map((flavor) => {
                return {
                    id: flavor.id,
                    name: flavor.name,
                    ppg: flavor.ppg
                }
            })
        }
        return flavors
    })
    .then((flavors) => res.status(200).json(flavors))
    .catch(next)
})


module.exports = ingredientsRouter
