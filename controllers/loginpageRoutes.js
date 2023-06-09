const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('login');
});

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

router.post('/userlogin', async (req, res) => {
  try {
    const { name, password } = req.body;
    let userData = await User.findOne({ where: { name } });

    if (!userData) {
      if (password.length < 8) {
        return res
          .status(400)
          .json({
            message: 'Your Password must be at least 8 characters long',
          });
      }
      userData = await User.create({ name, password });
      req.session.save(() => {
        req.session.name = userData.name;
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        return res.json({
          user: userData,
          message: 'Successfully Created a New Account',
        });
      });
    } else {
      const validPassword = await userData.checkPassword(password);
      if (!validPassword) {
        return res
          .status(400)
          .json({ message: 'Incorrect password, please try again' });
      } else {
        req.session.save(() => {
          req.session.name = userData.name;
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          return res.json({
            user: userData,
            message: 'You are now logged in!',
          });
        });
      }
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
