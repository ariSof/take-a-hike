const User = require('./User');
const Hiking = require('./Hiking');

User.hasMany(Hiking, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Hiking.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Hiking };
