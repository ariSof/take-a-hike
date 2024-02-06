const router = require('express').Router();
// const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

// this is where you add the routes for each of your pages
router.get("/",(req, res)=>{
    res.render('home');
});

router.get("/home",(req, res)=>{
    res.render('home');
});

router.get("/abouthike",(req, res)=>{
    res.render('about');
});

router.get("/review",(req, res)=>{
    res.render('review');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

module.exports = router;
