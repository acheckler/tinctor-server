const express = require("express");
const ProjectsService = require("./projects-service");
const path = require('path')
const xss = require('xss');
const projectsRouter = express.Router();
const jsonParser = express.json()

projectsRouter.route('/').get((req, res, next) => {
  ProjectsService.getAllProjects(req.app.get("db"))
    .then((projects) => {
      if (projects.length !== 0) {
        projects = projects.map((project) => {
          return {
            id: project.id,
            name: project.name,
            tincVolume: project.t_volume,
            cannaId: project.canna_id,
            cannaConcentration: project.canna_concentration,
            carrierId: project.carrier_id,
            carrierConcentration: project.carrier_percentage,
            flavorId: project.flavor_id,
            bottleId: project.bottle_id,
            dropperId: project.dropper_id,
            totalCPU: project.total_cpu,
          };
        });
      }
      return projects;
    })
    .then((projects) => res.status(200).json(projects))
    .catch(next);
})
.post(jsonParser, (req, res, next) => {
  const { name, t_volume, canna_id, canna_concentration, carrier_id, carrier_percentage, flavor_id, bottle_id, dropper_id, total_cpu } = req.body
  const newProject = { name, t_volume, canna_id, canna_concentration, carrier_id, carrier_percentage, flavor_id, bottle_id, dropper_id, total_cpu }
  
  for(const [key, value] of Object.entries(newProject)) {
    if(value == null) {
      return res.status(400).json({
        error: {message: `Missing ${key} in request body`}
      })
    }
  }


    ProjectsService.insertProject(
      req.app.get('db'),
      newProject
    )
      .then((project) => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl + `/${project.id}`))
          .json(project)
      })
      .catch(next)
})



projectsRouter.route("/display")
.all((req, res, next) => {
  const knexInstance = req.app.get("db");
  ProjectsService.getForDisplay(knexInstance, req.params.id)
    .then(project => {
      if (!project) {
        return res.status(404).json({
          error: { message: `Project does not exist` },
        });
      }
      res.project = project;
      next();
    })
    .catch(next);
})
.get((req, res, next) => {
  res.json((res.project))
})



projectsRouter
  .route("/:id")
  .all((req, res, next) => {
    const knexInstance = req.app.get("db");
    ProjectsService.getById(knexInstance, req.params.id)
      .then(project => {
        if (!project) {
          return res.status(404).json({
            error: { message: `Project does not exist` },
          });
        }
        res.project = project;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json((res.project))
  })
  .delete((req, res, next) => {
    ProjectsService.deleteProject(
      req.app.get('db'),
      req.params.id
    )
      .then(() => {
        res.status(204).end()
      })
      .catch(next)
  })


  // projectsRouter
  // .route("/display/:id")
  // .all((req, res, next) => {
  //   const knexInstance = req.app.get("db");
  //   ProjectsService.getForDisplay(knexInstance, req.params.id)
  //     .then(project => {
  //       if (!project) {
  //         return res.status(404).json({
  //           error: { message: `Project does not exist` },
  //         });
  //       }
  //       res.project = project;
  //       next();
  //     })
  //     .catch(next);
  // })
  // .get((req, res, next) => {
  //   res.json((res.project))
  // })

  

module.exports = projectsRouter;
