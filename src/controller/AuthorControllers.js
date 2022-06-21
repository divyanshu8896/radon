const { count } = require("console")
const authorModel= require("../Models/AuthorModel")

const createAuthor = async function (req, res) {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.send({ msg: savedData });
  };

  module.exports.createAuthor = createAuthor;