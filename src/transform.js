const groupAdultsByAgeRange = (people) => {
    var group0 = people
    .filter(person => person.age < 18)
    group0 = []

    var group1 = people
    .filter(person => person.age <= 20 && person.age > 18)
    var group2 = people
    .filter(person => person.age >= 21 && person.age <= 30)
    var group3 = people
    .filter(person => person.age >= 31 && person.age <= 40) 
    var group4 = people
    .filter(person => person.age >= 41 && person.age <= 50)
    var group5 = people
    .filter(person => person.age >= 51)

    var dic = {}
    if(group1.length > 0) {
        dic['20 and younger'] = group1
    }
    if(group2.length > 0) {
        dic['21-30'] = group2
    } 
    if(group3.length > 0) {
        dic['31-40'] = group3
    }
    if(group4.length > 0) {
        dic['41-50'] = group4
    }
    if(group5.length > 0) {
        dic['51 and older'] = group5
    }
    
    return dic
}


module.exports = {groupAdultsByAgeRange}