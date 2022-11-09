const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const inputRoutes = require('./input-routes');
// const downloadRoutes = require('./download-routes');

router.use('/user', userRoutes);
router.use('/input', inputRoutes);
// router.use('/download', downloadRoutes);

// if light blue its not being exported

module.exports = router;
