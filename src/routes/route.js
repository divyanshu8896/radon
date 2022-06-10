const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor)

router.post("/createPublisher", authorController.createPublisher)

router.get("/createBook", authorController.createBook)

router.get ("/getbookwithAuthorsData", authorController.getbookwithAuthorsData)
// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;