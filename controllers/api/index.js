const router = require('express').Router();

const gamepageRoutes = require('./gamepageRoutes');
const highscoreRoutes = require('./highscorepageRoutes');
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/highscores', highscoreRoutes);
router.use('gamepage', gamepageRoutes);

module.exports = router;