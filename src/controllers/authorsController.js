const authorModel= require("../models/authorsModel")
const BookModel= require("../models/booksModel")


const createauthors= async function (req, res) {
    let data= req.body 
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createbooks= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const getbookbyChetanBhagat= async function (req, res) {
    let data= await authorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    console.log(data)
    let list= await BookModel.find({author_id:data[0].author_id})
    res.send({msg: list})
}

const getbylistauthor =async function (req, res) {
    let data = await BookModel.findOneAndUpdate({Name:"Two states"},{$set:{prices:100}},{new:true})
    let authorData = await authorModel.find({author_id: "1"}).select({author_name: 1,_id:0});
    let price = data.price
    res.send({msg: price,authorData})
}
const getBookwithPrice =async function (req, res) {
    let books = await BookModel.find({price: {$gte:50, $lte: 100 }}).select({ author_id:1 });
    books= books.map((book) => book.author_id);
    const authors = await authorModel.find({author_id: {$in: books }});
    let authorName = authors.map((name) => name.author_name);
    res.send(authorName)
}

module.exports.createauthors= createauthors
module.exports.createbooks= createbooks
module.exports.getbookbyChetanBhagat= getbookbyChetanBhagat
module.exports.getbylistauthor=getbylistauthor
module.exports.getBookwithPrice=getBookwithPrice