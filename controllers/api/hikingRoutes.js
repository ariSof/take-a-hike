const router = require('express').Router();
const { Model } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res) => {
    try {
        const newHiking = await Hiking.create({
            ...req.body,
            user_id: req.session.user._id,
        });
        res.status(200).json(newHiking)
    } catch (err) {
        res.status(400).json(err);
    }
});


