const Sequelize = require('sequelize');
const cloudinary = require('cloudinary');
          
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );

  cloudinary.config({ 
  cloud_name: 'dwjrsllb0', 
  api_key: '523917771581893', 
  api_secret: '4tBJXJl6CdbSMMId7MvPuqf_2kY' 

  });
}

module.exports = sequelize;
