const Scan = require('../../scanService/domain/Scan');
const connectDB = require('../utils/config/mogoose');
const disconnectDB = require('../utils/config/mogoose');
const faker = require('faker');

async function generateMockScans(count){
  console.log('Initializing populateDB');

  await connectDB();
  
  const scans = [];
  for(let i = 0; i < count; i++){
    const country = faker.address.country();
    const device = faker.random.arrayElement(['Mobile', 'Desktop', 'Tablet']);
    const time = faker.date.recent();

    const scan = new Scan({
      country, 
      device,
      time
    });

    scans.push(scan);
  }

  await Scan.insertMany(scans)
    .then(() => {
      console.log('Data populate Successfully', count, 'records have been added');
      disconnectDB();
    }).
    catch((error) => { 
      console.error(error.message);
    });

  return scans;
}

generateMockScans(20000);