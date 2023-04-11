const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    res.sendFile('/phaserGame/index.html')
});
module.exports = router