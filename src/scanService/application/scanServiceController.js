const Scan = require('../domain/Scan');
const { validateDateRange } = require('../../infraestructure/utils/requestValidations/index');
const connectDB = require('../../infraestructure/utils/config/mogoose');

async function getScanByDateRange(req, res){ 
  try {
    console.log('initializing getScanByDateRange');
    
    const { error } = validateDateRange(req.query);
    
    if(error){
      return res.status(400).json({ error: error.details[0].message });
    }

    const { startDate, endDate } = req.query;

    const query = {};

    // if country parameter is provided, include it in query
    if(req.query.country){
      query.country = req.query.country;
    }

    if(startDate && endDate){
      query.time = query.time = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    connectDB();

    const scanCountByCountry = await Scan.aggregate([
      { $match: query },
      {
        $group: {
          _id: { country: '$country' },
          total: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          country: '$_id.country',
          total: 1,
          user_ids: 1,
        },
      },
    ]);
    
    return res.json(scanCountByCountry);


  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });    
  }
}

module.exports = getScanByDateRange;