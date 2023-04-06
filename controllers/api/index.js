const router = require('express').Router();
const userRoutes = require('./userRoutes');
const HighScoreRoutes = require('./HighScoreRoutes');

router.use('/users', userRoutes);
router.use('/highscores', HighScoreRoutes);

module.exports = router;