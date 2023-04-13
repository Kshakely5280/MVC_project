const router = require('express').Router();
const apiRoutes = require('./api');
const loginpageRoutes = require('./loginpageRoutes');

router.use('/', loginpageRoutes);
router.use('/api', apiRoutes);

module.exports = router;