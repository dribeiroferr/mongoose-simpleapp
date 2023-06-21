/**
 * 
 * @name corsOptions
 * @description This is only a configuration file for cors
 * 
 */

// It is all opened up just to ilustrate a purpose of this applicaiton

const options = { 
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: [
    'http://localhost:3000',
    '*'
  ],
  preflightContinue: false
};
  
module.exports = options;