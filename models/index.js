const User =require("./User");
const Grade =require("./Grade");
const Student =require("./Student");
const StudentClass =require("./StudentClass");
const Class = require("./Class");
const NewGrade = require("./Grade_new");

Student.belongsToMany(Class,{
    through:StudentClass,
    foreignKey:"student_id"
})

Class.belongsToMany(Student,{
    through:StudentClass,
    foreignKey:"class_id"
})

Student.hasMany(NewGrade,{
    foreignKey:"student_id"
})

NewGrade.hasMany(Student,{
    foreignKey:"student_id"
})

module.exports = {User,Grade,Student,StudentClass,Class,NewGrade}