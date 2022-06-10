const AuthorModel= require("../models/divyanshAuthor")
const PublisherModel= require("../models/divyanshPublisher")
const BookModel= require("../models/divyanshBook")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const createPublisher= async function (req, res) {
    let Publisher = req.body
    let PublisherCreated = await PublisherModel.create(Publisher)
    res.send({data: PublisherCreated})
}

const createBook= async function (req, res) {
    let Book = req.body
    let authorid = Book.auther_id
    let Publisherid = Book.Publisher_id

   //authorId validation===========================================================

    if (!authorid){return res.send("authorid is required" )}
    let author = await AuthorModel.findByid(authorid)
    if (!author){return res.send ("author is not present")}

//PublisherId validation===========================================================

    if (!Publisherid){return res.send ("Publisherid is required")}
    let Publisher = await PublisherModel.findById(Publisherid)
    if (!Publisher){return res.send ("Publisher is not present") }

    let BookCreated = await BookModel.create(Book)
    res.send({data: BookCreated})
}

const getbookwithAuthorsData= async function (req, res) {
    let authors = await BookModel.find().populate("author_id").populate("Publisher_id")
    res.send({data: authors})
}



module.exports.createAuthor= createAuthor
module.exports.createPublisher= createPublisher
module.exports.createBook= createBook
module.exports.getbookwithAuthorsData=getbookwithAuthorsData