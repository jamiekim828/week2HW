const groupAdultsByAgeRange = (people, name, age) => {
    return people
    .filter(() => {})
    .reduce((grouped, people) => {
        if(people.age <= 20) {
            grouped[0].push(people)
        }
        if(people.age > 21 && people.age <= 30) {
            grouped[1].push(people)
        }
        if(people.age > 31 && people.age <= 40) {
            grouped[2].push(people)
        }
        if(people.age > 41 && people.age <= 50) {
            grouped[3].push(people)
        }
        if(people.age >= 51) {
            grouped[4].push(people)
        }
        return category
    }, {
        "20 and younger" : [],
        "21-30" : [],
        "31-40" : [],
        "41-50" : [],
        "51 and older" : []
    })
}





module.exports = {groupAdultsByAgeRange}