const fetch = require('node-fetch')

const getTatooineResidents = (url) => {
    fetch('https://swapi.co/api/planets/1/')
    .then(res => res.body.residents)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

const promiseMeAString = () => {
    return new Promise((resolve, reject) => {
        if('I Promise!') resolve("You kept the Promise!")
        else 
            reject("You have failed me!")
    })
}

module.exports = {
    getTatooineResidents,
    promiseMeAString
}