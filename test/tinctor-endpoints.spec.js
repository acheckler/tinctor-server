const config = require('../src/config')
require('dotenv').config()
const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const { makeProjectsArray } = require('./projects.fixtures')
const { makeIngredientsArray } = require('./ingredients.fixtures')
const { makePackagingArray } = require('./packaging.fixtures')
const { makeProjectsResArray } = require('./projects.res.fixtures')

describe('Tinctor Endpoints', function () {
    let db;

    before('Make knex instance', () => {
        db = knex({
            client: "pg",
            connection: config.REACT_APP_TEST_DATABASE_URL,
            
        })
        app.set("db", db)
    })

    before("clean the table", () => {
        return db.raw('TRUNCATE projects, ingredients, packaging RESTART IDENTITY CASCADE');
      });
    
      after("disconnect from db", () => db.destroy());
    
      afterEach("cleanup", () => {
        return db.raw('TRUNCATE projects, ingredients, packaging RESTART IDENTITY CASCADE');
      });

    describe(`GET /projects`, () => {
        context('Given no projects', () => {
            it('responds with an empty array', () => {
                return supertest(app)
                    .get('/projects')
                    .expect(200, [])
            })
        })
        context('Given there are projects in the table', () => {
            const testProjects = makeProjectsArray()
            const testIngredients = makeIngredientsArray()
            const testPackaging = makePackagingArray()
            const testProjectsRes = makeProjectsResArray()
            beforeEach('insert ingredients', () => {
                return db
                .into('ingredients')
                .insert(testIngredients)
            })
            beforeEach('insert packaing', () => {
                return db
                .into('packaging')
                .insert(testPackaging)
            })
            beforeEach('insert projects', () => {
                return db
                    .into('projects')
                    .insert(testProjects)
            })
            it('responds with all projects', () => {
                return supertest(app)
                .get('/projects')
                .expect(200, testProjectsRes)
            })
        })
    })
    describe("POST /projects", () => {
        const testIngredients = makeIngredientsArray()
            const testPackaging = makePackagingArray()
        beforeEach('insert ingredients', () => {
            return db
            .into('ingredients')
            .insert(testIngredients)
        })
        beforeEach('insert packaing', () => {
            return db
            .into('packaging')
            .insert(testPackaging)
        })
        it("creates a project, responds with 201 and the new project", function() {
          this.retries(3);
          const newProject = {
                name: "1000mg",
                t_volume: 30,
                canna_id: "I055",
                canna_concentration: 1000,
                carrier_id: "I001",
                carrier_percentage: "100.00",
                flavor_id: "I003",
                bottle_id: "BT05",
                dropper_id: "D01",
                total_cpu: 6.00
          };
          return supertest(app)
            .post("/projects")
            .send(newProject)
            .expect(201)
            .expect((res) => {
              expect(res.body.name).to.eql(newProject.name);
            })
            .then((res) =>
             supertest(app)
                .get(`/projects/${res.body.id}`)
                .set('Accept', 'text/json')
            .expect('Content-Type', /json/ ,'charset=utf-8')
            .expect(res.body)
            );
        });
    
        it(`responds with 400 and an error message when name field is missing`, () => {
          const newProject = {};
          return supertest(app)
            .post('/projects')
            .send(newProject)
            .expect(400, {
              error: {message: `Missing name in request body`}
            });
        });
      });
    
})