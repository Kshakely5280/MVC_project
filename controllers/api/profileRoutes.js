const router = require('express').Router();
const { User, HighScore } = require('../../models');
const withAuth = require('../../utils/auth');
const fs = require('fs');

router.get('/', withAuth, async (req, res) => {
  try {
    let dylan = await fs.readFileSync('highscore.json', 'utf8', (error, data) => {
      error ? console.error(error) : console.log(error);
    });
    let scores = await JSON.parse(dylan).scoresArray;
    console.log(scores);
    res.render('profile', {
      scores,
      user: req.session.name,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(501).json(err);
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