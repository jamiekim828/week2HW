const fetch = require('node-fetch')

const getTatooineResidents = () => {
    fetch('https://swapi.co/api/planets/1/')
    .then(res => res.json())
    .then(planets1 => console.log(planets1.residents))
    .catch(err => console.log(err))
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