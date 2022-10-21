const router = require('express').Router();
const { Task } = require("../models");

router.get('/', (req, res) => {
    res.json("Hi! I am in the taskRoutes folder~");
});

router.post('/', async (req, res) => {
    try {
     const taskData = await Task.create(req.body);
     res.status(200).json({msg: "We got your information!", taskData})
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;