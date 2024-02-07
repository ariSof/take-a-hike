const User = require('./User');
const Hike = require('./Hike');
const Image = require('./Image');
const Comment = require('./Comment');


User.hasMany(Hike, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Hike.belongsTo(User, {
  foreignKey: 'user_id'
});

Hike.hasMany(Image, {
    foreignKey: 'hike_id',
    onDelete: 'CASCADE'
})

Image.belongsTo(Hike, {
    foreignKey: 'hike_id'
})

Hike.hasMany(Comment, {
  foreignKey: 'hike_id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(Hike, {
  foreignKey: 'hike_id'
})

module.exports = { User, Hike, Image, Comment };
