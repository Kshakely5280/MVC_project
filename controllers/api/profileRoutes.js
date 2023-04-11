const router = require('express').Router();
const {User, HighScore } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const highscoreData = await HighScore.findAll({
      include: [
        {
          model: User,
          attributes: ['name', 'score', 'createdAt'],
        },
      ],
    });


    // Pass serialized data and session flag into template
    res.render('highscore', { 
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
// i think this is where click function would link to button to take you to game page



module.exports = router;