const express = require("express");
const userRouter = require("./user");
const router = express.Router();
router.use('/user', userRouter)

router.use('/', (req, res) => {
    res.status(200).json({
        status: "ok"
    })
})

module.exports = router