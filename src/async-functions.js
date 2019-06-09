const fetch = require('node-fetch')

const getTatooineResidents = (url) => {
    fetch('https://swapi.co/api/planets/1/')
    .then(res => res.json())
    .then(data => data.body.residents)
    .catch(error => console.log(error))
}

const promiseMeAString = (string) => {
    return new Promise((resolve, reject) => {
        if(string) resolve("You kept the Promise!")
        else 
            reject("You have failed me!")
    })
}

module.exports = {
    getTatooineResidents,
    promiseMeAString
}