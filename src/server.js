const express = require('express');
const swagger = require('./infraestructure/swagger');
const routes = require('./infraestructure/routes');

const app = express();
const PORT = 3000;

swagger.serveSwagger(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);


app.listen(PORT, () => { 
  console.log(`Server is listening on port ${PORT}`);
});