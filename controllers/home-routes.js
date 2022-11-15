const router = require('express').Router();
const { Student,Class,Grade } = require('../models/');


const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', async (req, res) => {
    res.render("login")
});

// get single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('single-post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/input', async (req, res) => {
  
  try{
    const studentData = await Student.findAll();
    const students = studentData.map(student => student.get({plain:true}))

    const courseData = await Class.findAll();
    const courses = courseData.map(course => course.get({plain:true}))

    const gradeData = await Grade.findAll();
    const grades = gradeData.map(grade=> grade.get({plain:true}))

    console.log(students);
    res.render("input",{students,courses,grades});
  }
  catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
