const router = require('express').Router();
const withAuth = require('../../utils/auth');
const fs = require('fs');

router.get('/', async (req, res) => {
    res.sendFile('/phaserGame/index.html')
});

router.post('/scores', async (req, res) => {
    let highscoreData = fs.readFileSync('highscore.json', 'utf8', (error, data) => {
        error ? console.error(error) : console.log(error);
    });
    let scoresArray = JSON.parse(highscoreData).scoresArray.slice(0,25);
    console.log(scoresArray)
    

    const newObj = {score:req.body.scores, username: req.session.name}
    scoresArray.unshift(newObj);
    
    fs.writeFileSync('highscore.json', JSON.stringify({scoresArray}));
    res.status(200).end()
});

router.get('/scores', async (req, res) => {
    let highscoreData = fs.readFileSync('highscore.json', 'utf8', (error, data) => {
        error ? console.error(error) : console.log(error);
    });
    let scores = JSON.parse(highscoreData).scores;
    res.status(200).json({ scores });
});



module.exports = router