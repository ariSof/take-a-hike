const sequelize = require('../config/connection');
const { User, Hike, Image } = require('../models');

//const userData = require('./userData.json');
const hikeData = require('./hikeData.json');
const imageData = require('./imageData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // const users = await User.bulkCreate(userData, {
    //     individualHooks: true,
    //     returning: true,
    // });

    
    await Hike.bulkCreate(hikeData);
    
    await Image.bulkCreate(imageData);

    process.exit(0);
};

seedDatabase ();