const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const inputRoutes = require('./input-routes');


router.use('/user', userRoutes);
router.use('/input', inputRoutes);

module.exports = router;
