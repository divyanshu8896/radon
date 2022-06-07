const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )
router.get("/booklist", BookController.booklist)
router.get("/getBookInyear",BookController.getBookInyear)
router.get("/getParticularBook",BookController.getParticularBook)
router.get("/priceDetails",BookController.priceDetails)
router.get("/randomBooks",BookController.randomBooks)
module.exports = router;