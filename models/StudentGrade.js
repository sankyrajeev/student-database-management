const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class StudentGrade extends Model {

}

StudentGrade.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        student_id: {
            type: DataTypes.INTEGER,
            references:{model:"Student" , key:"id"}
        },

        grade_id: {
            type: DataTypes.INTEGER,
            references:{model:"Grade" , key:"id"}
        },



    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'StudentGrade'
    }
);

module.exports = StudentGrade;
