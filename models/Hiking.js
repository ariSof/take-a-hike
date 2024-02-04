const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hiking extends Model {}

Project.init(
    {



    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'hiking',
      }
    );
    
    module.exports = Hiking;