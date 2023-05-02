var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Nodejs Rest CRUD API with Swagger",
            version: "0.1.0",
            description:
                "Persons!",
            license: "",
            contact: {
                name: "",
                url: ""
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/person.routes.js"],
};

const swaggerSpecs = swaggerJsdoc(options);

exports.swaggerSpecs = swaggerSpecs;
exports.swaggerUi = swaggerUi; 