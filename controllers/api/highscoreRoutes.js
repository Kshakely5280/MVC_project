const router = require('express').Router();
const {HighScore} = require('../../models');

router.get('/', async (req, res) => {
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


module.exports = router