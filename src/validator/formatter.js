
function trim() {
    let name = '  divyanshu chaurasia   '
    console.log('Trimmed name is: ',name.trim())
}

function changetoLowerCase() {
    let name = 'DivYaNsHu ChAuRaSiA'
    console.log('Name in lowercase is: ',name.toLowerCase())
}

function changeToUpperCase() {
    let name = 'divyanshu chaurasia'
    console.log('Name in uppercase is: ',name.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase