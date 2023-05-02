const express = require("express");
const app = express();
const port = 3000;

require('./db.config.js');
require('./routes/person.routes.js')(app);

app.get('/', (req, res) => {
    res.send('Persons!')
  })

app.listen(port, () => {
  console.log("Server Started On.. http://localhost:" + port);
});

const {swaggerUi, swaggerSpecs} = require('./swagger.config.js');

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, { explorer: true })
);