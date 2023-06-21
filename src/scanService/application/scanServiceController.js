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

    const { country, startDate, endDate } = req.query;

    connectDB();

    const scans = await Scan.find({
      country,
      time: { 
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      }
    }).maxTimeMS(30000);

    const scanDataByCountry = {};
    scans.forEach((scan) => {
      const { country } = scan;
      if(scanDataByCountry[country]){
        scanDataByCountry[country]++;
      } else { 
        scanDataByCountry[country];
      }
    });

    console.log('data_retrived: ', scans);
    
    return res.json(scans);


  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });    
  }
}

module.exports = getScanByDateRange;