const router = require('express').Router();
// const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    res.sendFile('index.html')
});



module.exports = router