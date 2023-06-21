module.exports = { 

  info: {
    version: '1.0.0',
    title: 'EXAMPLE API',
    description: 'API docummentation.'
  },
  host: [
    'localhost:3000', 
  ],
  basePath: '/',
  schemes: 'http',
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      'name': 'User',
      'description': 'Endpoints'
    }
  ],
  definitions: {
    Scan: {
      country: 'Canada',
      device: 'Mobile',
      time: '2023-06-20'
    }
  }
   
};