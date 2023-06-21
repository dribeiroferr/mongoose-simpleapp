const mongoose = require('mongoose');

/**
 * 
 * @name scanSchema
 * @description base schema for scans
 * 
 */

const scanSchema = new mongoose.Schema({ 
  country: { 
    type: String, 
    required: true, 
  }, 
  device: { 
    type: String, 
    required: true, 
  }, 
  time: { 
    type: Date, 
    required: true
  }
});

const Scan = mongoose.model('scan', scanSchema);

module.exports = Scan;