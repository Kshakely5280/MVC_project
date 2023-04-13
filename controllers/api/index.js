const router = require('express').Router();
const gameRoute = require('./gameRoute');
const profileRoutes = require('./profileRoutes');

router.use('/profile', profileRoutes);
router.use('/gamepage', gameRoute);

module.exports = router;