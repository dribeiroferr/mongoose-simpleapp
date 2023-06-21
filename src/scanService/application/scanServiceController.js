const Scan = require('../domain/Scan');
const { validateDateRange } = require('../../infraestructure/utils/requestValidations/index');
const connectDB = require('../../infraestructure/utils/config/mogoose');

/**
 * @swagger
 * /scans:
 *   get:
 *     summary: Get total number of scans by country within a date range
 *     description: Retrieve the total number of scans for each country within a specific date range.
 *     parameters:
 *       - name: country
 *         in: query
 *         required: true
 *         description: Country name to filter the scans.
 *         schema:
 *           type: string
 *       - name: startDate
 *         in: query
 *         required: true
 *         description: Start date of the date range.
 *         schema:
 *           type: string
 *           format: date
 *       - name: endDate
 *         in: query
 *         required: true
 *         description: End date of the date range.
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       '200':
 *         description: Successful response with the scan count by country.
 */

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