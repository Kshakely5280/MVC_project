const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('login');
})


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.post('/login-test', async (req, res) => {
// });

router.post('/userlogin', async (req, res) => {
  console.log('route hit!');
  try {
    const { name, password } = req.body;
    let userData = await User.findOne({ where: { name } });

    if (!userData) {
      userData = await User.create({ name, password });
      return res.json({
        user: userData,
        message: 'Successfully Created a New Account',
      });
    } else {
      const validPassword = await userData.checkPassword(password);
      if (!validPassword) {
        return res
          .status(400)
          .json({ message: 'Incorrect password, please try again' });
      }
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      return res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
