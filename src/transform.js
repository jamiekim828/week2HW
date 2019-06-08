const groupAdultsByAgeRange = (people) => {
    return people
    .filter((people) => people.age > 18)
    .reduce((category, people) => {
        if(people.age <= 20) {
            category.adult1.push(people)
        }
        if(people.age > 21 && people.age <= 30) {
            category.adult2.push(people)
        }
        if(people.age > 31 && people.age <= 40) {
            category.adult3.push(people)
        }
        if(people.age > 41 && people.age <= 50) {
            category.adult4.push(people)
        }
        if(people.age >= 51) {
            category.agult5.push(people)
        }
        return category
    }, {
        adult1 : [],
        adult2 : [],
        adult3 : [],
        adult4 : [],
        adult5 : []
    })
    return adultCategories
}




module.exports = {groupAdultsByAgeRange}