const printDate = function(){
    let currentdate = new Date()
    console.log('the current date is '+currentdate)
}

const printMonth = function(){
    let currentdate = new Date()
    let currentMonth = currentdate.getMonth() + 1
    console.log('the current month is '+currentMonth)
}

const getBatchInfo = function(){
    console.log('Radon, W3D3, the topic for today is Nodejs module system')
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo