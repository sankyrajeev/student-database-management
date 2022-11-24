const router = require('express').Router();
const withAuth = require("../../utils/auth");
const { Student, StudentClass, Grade, NewGrade } = require("../../models");


// router.post('/', withAuth, async (req, res) => {
//   const body = req.body;

//   try {
//     const newPost = await Post.create({ ...body, userId: req.session.userId });
//     res.json(newPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log(req.body); 
    const updatedStudent = await Student.update(
      req.body,
         {
        where: {
            id: req.params.id
        },
    });
   
} catch (err) {
    res.status(500).json(err);
}


});
  
 


router.post('/', withAuth, async (req, res) => {
  
  try {
    const newStudent = await Student.create(req.body);
    console.log(newStudent);

    // res.render("input",newStudent);
    res.json({newStudent});
  }
  catch (err) {
    res.status(500).json(err.message);
  }
});

router.post('/student-course',withAuth,async(req,res) =>{
  try{
    const enrollment = await StudentClass.create(req.body);
    res.json(enrollment);

  }
  catch(err){
    res.status(500).json(err)
  }
})


router.post('/grade',withAuth,async(req,res) =>{
  try{
    const grade = await Grade.create(req.body);
    res.json(grade);

  }
  catch(err){
    res.status(500).json(err)
  }
})


router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleteStudent= await Student.destroy({
      where:{
        id:req.params.id
      }
    });
    if(!deleteStudent){
      res.status(404).json({message:"Student does not exist with that ID"})
    }
    res.status(200).json(deleteStudent);
  }
  catch(err){
    res.status(500).json(err.message);
  }

});


router.get('/',async(req,res) =>{

    try{
      const studentData = await Student.findAll();
      const students = studentData.map(student => student.get({plain:true}))
      console.log(students);
      res.json(students);
    }
  catch(err){
    res.status(500).json(err);
  }
})










module.exports = router;
