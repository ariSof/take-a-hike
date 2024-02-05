const User = require('./User');
const Hike = require('./Hike');

User.hasMany(Hike, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Hike.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Hike };
