const router = require('express').Router();
const { Hike, User, Image } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const hikeData = await Hike.findAll({
            include: [
                {
                    model: User,
                    atributes: ['name'],
                },
            ],
        });
    const hikes = hikeData.map((hike) => hike.get({ plain: true }));
    
        res.render('homepage', {
            hikes, 
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
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

        res.render('hike', {
          ...hike,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

