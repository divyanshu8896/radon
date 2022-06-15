const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
// const Mid= require("../middileware/auth")
const Mid = require("../midlleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId",Mid.authenticate,Mid.authorise,userController.getUserData)
router.post("/users/:userId/posts",Mid.authenticate,Mid.authorise,userController.postMessage)
router.put("/Update/:userId",Mid.authenticate,Mid.authorise,userController.updateUser)
router.delete("/delete/:userId",Mid.authenticate,Mid.authorise,userController.deleteUser)

module.exports = router;