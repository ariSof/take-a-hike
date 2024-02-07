const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const hikingRoutes = require('./hikingRoutes');

router.use('/users', userRoutes);
router.use('/hiking', hikingRoutes);
router.use('/users', userRoutes);
// router.use('/hiking', hikingRoutes);

module.exports = router;
