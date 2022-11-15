const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Grade extends Model {

}

Grade.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: { model: "Student", key: "id" }
    },
    
      class_id: {
      type: DataTypes.INTEGER,
      references: { model: "Class", key: "id" }
    },
  },

  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Grade'
  }


);

module.exports = Grade;
