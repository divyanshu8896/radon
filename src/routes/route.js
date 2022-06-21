const express = require('express');
const router = express.Router();
const AuthorsController= require("../controller/AuthorControllers")

router.post("/authors",AuthorsController.createAuthor)



module.exports = router;