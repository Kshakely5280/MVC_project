const router = require('express').Router();
router.get('/', async (req, res) => {
    res.sendFile('index.html')
});
module.exports = router