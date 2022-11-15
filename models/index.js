const User =require("./User");
const Grade =require("./Grade");
const Student =require("./Student");
const StudentClass =require("./StudentClass");
const Class = require("./Class");

Student.belongsToMany(Class,{
    through:StudentClass,
    foreignKey:"student_id"
})

Class.belongsToMany(Student,{
    through:StudentClass,
    foreignKey:"class_id"
})


module.exports = {User,Grade,Student,StudentClass,Class}