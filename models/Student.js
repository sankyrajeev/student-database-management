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
      }
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
