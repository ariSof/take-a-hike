const router = require('express').Router();
const { Hike, User, Image } = require('../models');
const withAuth = require('../utils/auth');

// this is where you add the routes for each of your pages
router.get("/", async (req, res)=>{
    try {
        const hikeData = await Hike.findAll({
            include: [
                {
                    model: User,
                    atributes: ['id'],
                },
            ],
        });
    
        const hikes = hikeData.map((hike) => hike.get({ plain: true }));
    
        res.render('home', {
            hikes, 
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Route for searching for a hike based on difficutly,  /search/?difficulty=easy
router.get('/search', async (req, res) => {
  
    // Check and see if there is a query parameter at all
    const hasQuery = Object.keys(req.query).length > 0;
    console.log(req.query);

   // If we have a query of 'difficulty' and it's value is 'easy' or 'moderate' or 'hard' send only those results 
    if (hasQuery && (req.query.difficulty === 'easy' || req.query.difficulty === 'moderate' || req.query.difficulty === 'hard')) {
        try {
            const hikeData = await Hike.findAll({
                include: [
                    {
                        model: Image,
                        atributes: ['url'],
                    },
                ],
                where: {
                    difficulty: req.query.difficulty
                  },
            });

            const hikes = hikeData.map((hike) => hike.get({ plain: true }));
           
            return res.json(hikes);

        // res.render('home', {
        //     hikes,
        //     logged_in: req.session.logged_in
        // });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.json("Sorry, no hikes match your search. Try again.");
    }
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

router.get('/profile', withAuth, async (req, res) => {
    try {
        
    const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Hike }],
    })

    const user = userData.get({ plain:true });

    res.render('profile', {
        ...user,
        logged_in: true
    });
} catch (err) {
    res.status(500).json(err);
}
});







router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }
  res.render('login');

});

router.get('/hike/:id', async (req, res) => {
    try {
        const hikeData = await Hike.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });


    const hike = hikeData.get({ plain: true });
        // res.json(hike)
        res.render('review', {
          ...hike,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

    module.exports = router;
    
