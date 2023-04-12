const router = require('express').Router();
const {User, HighScore } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const highscoreData = await HighScore.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });


    // Pass serialized data and session flag into template
    res.render('profile', { 
      highscoreData, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;