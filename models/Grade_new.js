const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const { init } = require('./User');

class Grade_new extends Model {

}

Grade_new.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
          student_id: {
            type: DataTypes.INTEGER,
            references: { model: "Student", key: "id" }
          },
        },

        {

            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'Grade_new'
          }
    
);
module.exports = Grade_new;