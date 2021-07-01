const express = require('express')
const PackagingService = require('./packaging-service')

const packagingRouter = express.Router();

packagingRouter.route('/').get((req, res, next) => {
    PackagingService.getAllPackaging(req.app.get('db'))
    .then((packaging) => {
        if (packaging.length !== 0) {
            packaging = packaging.map((item) => {
                return{
                    id: item.id,
                    name: item.name,
                    cpu: item.cpu,
                    category: item.category
                }
            })
        }
        return packaging
    })
    .then((packaging) => res.status(200).json(packaging))
})

packagingRouter.route('/:id')
.all((req, res, next) => {
    const knexInstance = req.app.get('db')
    PackagingService.getPackagingById(knexInstance, req.params.id)
    .then(packaging => {
        if (!packaging) {
            return res.status(404).json({
                error: {message: `packaging item doesn't exist`}
            })
        }
        res.packaging = packaging
        next()
    })
    .catch(next)
})
.get((req, res, next) => {
    res.json((res.packaging))
})



packagingRouter.route('/bottles').get((req, res, next) => {
    PackagingService.getBottles(req.app.get('db'))
    .then((bottles) => {
        if (bottles.length !== 0) {
            bottles = bottles.map((bottle) => {
                return {
                    id: bottle.id,
                    name: bottle.name,
                    cpu: bottle.cpu
                }
            })
        }
        return bottles
    })
    .then((bottles) => res.status(200).json(bottles))
    .catch(next)
})

packagingRouter.route('/droppers').get((req, res, next) => {
    PackagingService.getDroppers(req.app.get('db'))
    .then((droppers) => {
        if (droppers.length !== 0) {
            droppers = droppers.map((dropper) => {
                return {
                    id: dropper.id,
                    name: dropper.name,
                    cpu: dropper.cpu
                }
            })
        }
        return droppers
    })
    .then((droppers) => res.status(200).json(droppers))
    .catch(next)
})

module.exports = packagingRouter