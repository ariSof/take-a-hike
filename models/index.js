const User = require('./User');
const Hike = require('./Hike');
const Image = require('./Image');

User.hasMany(Hike, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Hike.belongsTo(User, {
  foreignKey: 'user_id'
});

Hike.hasMany(Image, {
    foreignKey: 'added_image_id',
    onDelete: 'CASCADE'
})

Image.belongsTo(Hike, {
    foreignKey: 'id'
})

module.exports = { User, Hike, Image };
