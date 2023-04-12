const router = require('express').Router();
const withAuth = require('../../utils/auth');
const fs = require('fs');



router.get('/', withAuth, async (req, res) => {
    res.sendFile('/phaserGame/index.html')
});

router.post('/scores', async (req, res) => {
    let highscoreData = fs.readFileSync('highscoreData.json', 'utf8', (error, data) => {
        error ? console.error(error) : console.log('howdy george');
    });
    let scores = JSON.parse(highscoreData).scores;
    
    console.log(req.body.scores);
    console.log(scores);
  scores.push(req.body.scores);
    
    fs.writeFileSync('highscoreData.json', JSON.stringify({scores}));
    res.status(200).end()
    console.log('its goin');
});

router.get('/scores', async (req, res) => {
    let highscoreData = fs.readFileSync('highscoreData.json', 'utf8', (error, data) => {
        error ? console.error(error) : console.log('am i getting it now mr.krabs?');
    });
    let scores = JSON.parse(highscoreData).scores;
    
    res.status(200).json({ scores });
});


module.exports = router