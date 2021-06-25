const express = require("express");
const ProjectsService = require("./projects-service");

const projectsRouter = express.Router();

projectsRouter.route('/').get((req, res, next) => {
  ProjectsService.getAllProjects(req.app.get("db"))
    .then((projects) => {
      if (projects.length !== 0) {
        projects = projects.map((project) => {
          return {
            id: project.id,
            name: project.name,
            tincVolume: project.tincVolume,
            cannaId: project.cannaId,
            cannaConcentration: project.cannaConcentration,
            carrierId: project.carrierId,
            carrierConcentration: project.carrierConcentration,
            flavorId: project.flavorId,
            bottleId: project.bottleId,
            dropperId: project.dropperId,
            totalCPU: project.totalCPU,
          };
        });
      }
      return projects;
    })
    .then((projects) => res.status(200).json(projects))
    .catch(next);
});

projectsRouter
  .route("/projects/:id")
  .all((req, res, next) => {
    const knexInstance = req.app.get("db");
    ProjectsService.getById(knexInstance, req.params.id)
      .then((project) => {
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
    res.json({
        id: res.project.id,
        name: res.project.name,
        tincVolume: res.project.tincVolume,
        cannaId: res.project.cannaId,
        cannaConcentration: res.project.cannaConcentration,
        carrierId: res.project.carrierId,
        carrierConcentration: res.project.carrierConcentration,
        flavorId: res.project.flavorId,
        bottleId: res.project.bottleId,
        dropperId: res.project.dropperId,
        totalCPU: res.project.totalCPU,
      })
      .catch(next);
  });

module.exports = projectsRouter;
