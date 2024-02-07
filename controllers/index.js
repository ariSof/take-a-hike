const router = require('express').Router();


//const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const hikingRoutes = require('./api/hikingRoutes');

router.use('/', homeRoutes);
//router.use('/api', apiRoutes);
router.use('/api', hikingRoutes);


module.exports = router;
