
/**
 * @swagger
 * /getPersons:
 *   get:
 *     summary: Retrieve a list of persons.
 *     responses:
 *       200:
 *         description: A list of persons.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       age:
 *                         type: integer
 *                       gender:
 *                         type: String
 *                       email:
 *                         type: String
 * 
 * 
 * /getPersonById/{id}:
 *   get:
 *     summary: Retrieve a single person by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the person to retrieve.
 *     responses:
 *       200:
 *         description: Retrieve selected id person.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       age:
 *                         type: integer
 *                       gender:
 *                         type: String
 *                       email:
 *                         type: String
 * 
 *  
 * /addPerson:
 *   post:
 *     summary: Create a person.
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: Integer
 *               name:
 *                 type: string
 *               age:
 *                 type: Integer
 *               gender:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: request body post successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: Integer
 *                       name:
 *                         type: string
 *                       age:
 *                         type: Integer
 *                       gender:
 *                         type: string
 *                       email:
 *                         type: string
 *  
 * 
 * /editPersonById/{id}:
 *   put:
 *     summary: Edit person by id.
 *     description: edit selected person by id and post request body as json. 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: the id of person to be edited
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                age:
 *                  type: Integer
 *                gender:
 *                  type: string
 *                email:
 *                  type: string
 *     responses:
 *       200:
 *         description: selected id person is edited as request body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                        type: Integer
 *                       name:
 *                           type: string
 *                       age:
 *                           type: Integer
 *                       gender:
 *                           type: string
 *                       email:
 *                           type: string
 * 
 * 
 * /deletePersonById/{id}:
 *   delete:
 *     summary: Delete person by id.
 *     decription: Selected id person is going to be deleted from db.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: the id of person to be deleted
 *     responses:
 *       200:
 *         description: selected id person is deleted.
 */

module.exports = (app) => {
  const Person = require("../controllers/person.controller.js");
  const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/getPersons", Person.findPersons);
  app.get("/getPersonById/:id", Person.findPersonById);
  app.post("/addPerson", Person.createNewPerson);
  app.put("/editPersonById/:id", Person.updateById);
  app.delete("/deletePersonById/:id", Person.deletePersonById);
};