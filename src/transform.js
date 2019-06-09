const groupAdultsByAgeRange = (people) => {
    var group0 = people
    .filter(person => person.age < 18)
    group0 = []

    var group1 = people
    .filter(person => person.age <= 20 && person.age > 18)
    var group2 = people
    .filter(person => person.age > 21 && person.age <= 30)
    var group3 = people
    .filter(person => person.age > 31 && person.age <= 40) 
    var group4 = people
    .filter(person => person.age > 41 && person.age <= 50)
    var group5 = people
    .filter(person => person.age >= 51)


    return {}
    
}


module.exports = {groupAdultsByAgeRange}