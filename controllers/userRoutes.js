const router = require('express').Router();
const { User, Task } = require("../models");

router.get("/", async (req, res) => {
    // res.json('Testing from userRoutes')
    try {
        const userData = await User.findAll({
            include: [{model: Task}],
        });
        console.log(userData);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
     const userData = await User.create(req.body);
     res.status(200).json({msg: "We got your information!", userData})
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;