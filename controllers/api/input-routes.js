const router = require('express').Router();
const withAuth = require("../../utils/auth");
const { Student, StudentClass, Grade } = require("../../models");


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
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  
  try {
    const newStudent = await Student.create(req.body)
    res.json(newStudent);
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

module.exports = router;
