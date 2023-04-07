const router = require('express').Router();

const gameRoute = require('./gameRoute');
const highscoreRoutes = require('./highscorepageRoutes');
const profileRoutes = require('./profileRoutes');


router.use('/profile', profileRoutes);
router.use('/highscores', highscoreRoutes);
router.use('gamepage', gameRoute);

module.exports = router;