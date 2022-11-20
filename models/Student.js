const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Student extends Model {

}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Mathgrade: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Sciencegrade: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Historygrade: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Geographygrade: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Englishgrade: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Student'
  }
);

module.exports = Student;
