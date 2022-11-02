const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Class extends Model {

}

Class.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    class_name: {     
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Class'
  }
);

module.exports = Class;
