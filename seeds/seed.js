const sequelize = require('../config/connection');
const { Class } = require('../models');


const classData = require('./courseData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

//   const classes = await Class.bulkCreate(classData, {
//     returning: true
//   });
    
  for (const course of classData) {
    console.log(course);
    await Class.create({

      ...course,
      
      
    });
  }




  process.exit(0);
};

seedDatabase();

