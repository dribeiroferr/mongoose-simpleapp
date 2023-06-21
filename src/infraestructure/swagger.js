const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = { 
  definition:{
    openapi: '3.0.0', 
    info: { 
      title: 'Scans API',
      version: '1.0.0'
    }
  }, 
  apis: ['./../scanService/application/scanServiceController.js']
};

const specs = swaggerJsdoc(options);

module.exports = { 
  serveSwagger: (app) => { 
    app.get('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));
  }, 
  specs
};