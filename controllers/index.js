const router = require("express").Router();
// const taskRoutes = require('./taskRoutes');
const userRoutes = require('./userRoutes');

// router.get("/index", (req, res) => {
//     res.json("Hewwooooooo");
// });

// router.use(' ')

// router.use("/task", taskRoutes);

router.use("/user", userRoutes);



module.exports = router;