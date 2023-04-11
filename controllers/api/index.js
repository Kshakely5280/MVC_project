const router = require('express').Router();

const gameRoute = require('./gameRoute');
// const highscoreRoutes = require('./highscoreRoutes');
const profileRoutes = require('./profileRoutes');


router.use('/profile', profileRoutes);
// router.use('/highscoreRoutes', highscoreRoutes);
router.use('/gamepage', gameRoute);

module.exports = router;