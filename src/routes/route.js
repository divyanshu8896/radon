const express = require('express');
const router = express.Router();
 const BookModel= require("../models/userModel.js")
 const UserController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

//
//router.get("/getUsersData", async function (req,res) {
  //let allUsers= await UserModel.find()
  //res.send({mes: allUsers})
//})
router.post("/createBook", UserController.createBook)
router.get("/getBooksData", UserController.getBooksData)

//router.post("/createData", UserController.createData)
//router.get("/getUsersData", UserController.getUsersData)

module.exports = router;