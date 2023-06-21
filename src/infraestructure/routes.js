const { Router } = require('express');
const cors = require('cors');
const swaggerDocument = require('./swagger_output.json');
const swaggerUi = require('swagger-ui-express');
const options = require('./utils/config/corsOptions'); 
const getScanByDateRange = require('../scanService/application/scanServiceController');

const routes = Router();

routes.options('*', cors(options));

// // swagger config: 
routes.use('/api/docs', swaggerUi.serve);
routes.get('/api/docs', swaggerUi.setup(swaggerDocument));
routes.get('/scans/', getScanByDateRange);

module.exports = routes;