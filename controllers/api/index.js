const router = require('express').Router();
const userRoutes = require('./userRoutes');
const highscoreRoutes = require('./highscoreRoutes');

router.use('/users', userRoutes);
router.use('/projects', highscoreRoutes);

module.exports = router;