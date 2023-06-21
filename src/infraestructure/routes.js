const { Router } = require('express');
// const cors = require('cors');

const getScanByDateRange = require('../scanService/application/scanServiceController');

const routes = Router();

routes.get('/scans/', getScanByDateRange.getScanByDateRange);

module.exports = routes;