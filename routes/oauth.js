const router = require('express').Router();
const passport = require('passport');

// The root route renders our only view
router.get('/', function(req, res, next) {
  //UPDATE THIS
  res.render('index');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/dash', // UPDATE THIS, where do you want the client to go after you login 
    failureRedirect : '/clients' //  UPDATE THIS, where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function(){ //< - req.logout comes from passport, and what it does is destorys the cookie keeping track of the user!
    res.redirect('/clients') // <---- UPDATE THIS TO WHERE YOU WANT THE USER TO GO AFTER LOGOUT
  })
})

module.exports = router;
