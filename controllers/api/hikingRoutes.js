const router = require('express').Router();
const { Image, Hike } = require('../../models');
const withAuth = require('../../utils/auth');

// route is /api/hiking/image used for adding an image
router.post('/image', withAuth, async (req,res) => {
    try {
        const newImage = await Image.create({
            ...req.body,
        });
        res.status(200).json(newImage);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.get('/hikes/:id', async (req, res) => {
    try {
     
      const hikeData = await Hike.findByPk(req.params.id, {
        include: [
            {
                attributes: ['id']
            },
        ],
      });
        const hike = hikeData.get({ plain: true });

        res.render('hike', {
            ...hike,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json({ error: 'Could not find any hiking trails' });
    }
  });



router.delete('/:id', withAuth, async (req, res) => {
    try {
        const hikeData = await Hike.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!hikeData) {
            res.status(404).json({ message: "no hike found with this id!"});
            return;
        }

        res.status(200).json(hikeData);
    } catch (err) {
        res.status(500).json(err);
    }
    });

module.exports = router;

