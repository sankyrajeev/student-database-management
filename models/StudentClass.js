const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class StudentClass extends Model {

}

StudentClass.init(
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

        class_id: {
            type: DataTypes.INTEGER,
            references:{model:"Class" , key:"id"}
        },



    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'StudentClass'
    }
);

module.exports = StudentClass;
