const User =require("./User");
const Grade =require("./Grade");
const Student =require("./Student");
const StudentClass =require("./StudentClass");
const Class = require("./Class");
const StudentGrade = require("./StudentGrade");

Student.belongsToMany(Class,{
    through:StudentClass,
    foreignKey:"student_id"
})

Class.belongsToMany(Student,{
    through:StudentClass,
    foreignKey:"class_id"
})

Student.belongsToMany(Grade,{
    through:StudentGrade,
    foreignKey:"student_id"
})

Grade.belongsToMany(Student,{
    through:StudentGrade,
    foreignKey:"grade_id"
})


module.exports = {User,Grade,Student,StudentClass,Class,StudentGrade}