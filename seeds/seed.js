const sequelize = require('../config/connection');
const { User, Hiking } = require('../models');

const userData = require('./userData.json');
const hikingData = require('./hikingData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    for (const hiking of hikingData) {
        await Hiking.create({
            ...hiking,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    process.exit(0);
};

seedDatabase ();