const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/userlogin');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;