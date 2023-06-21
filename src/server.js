const express = require('express');
const routes = require('./infraestructure/routes');
const env = require('./infraestructure/utils/config/env');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);


app.listen(PORT, () => { 
  console.log(`Server is listening on port ${env.port}`);
});