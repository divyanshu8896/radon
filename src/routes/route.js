const express = require('express');
const weltime = require('../logger/logger.js')
const myhelper = require('../util/helper.js')
const myformatter = require ('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    
   weltime.welcome()
   myhelper.printDate()
   myhelper.printMonth()
   myhelper.getBatchInfo()
   myformatter.trim()
   myformatter.changetoLowerCase()
   myformatter.changeToUpperCase()
        
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    const month = require ("lodash");
    let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    console.log(month.chunk(arr,4))
    const abc = require ("lodash")
    let a = [1,3,5,7,9,11,13,15,17,19]
    console.log(abc.tail(a))
    const lodash = require ("lodash")
    let b =[1,2,3,3]
    let c = [3,4,4,5,5]
    let d =[6,7,7,8]
    let e = [9,3,4,4]
    let f = [6,8,6,6]
    console.log(lodash.union(b,c,d,e,f))

    const movies = require ("lodash")
    
    let movie1 = ['horror', 'The Shining']
    let movie2 = ['drama','Titanic']
    let movie3 = ['thriller','Shutter Island']
    let movie4 = ['fantasy','Pans Labyrinth']

   let movieObject = lodash.fromPairs([movie1, movie2, movie3, movie4])
   console.log('Movies object: ', movieObject)
    res.send('My second ever api!')
});

module.exports = router;
// adding this comment for no reason