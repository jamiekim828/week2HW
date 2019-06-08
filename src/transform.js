const groupAdultsByAgeRange = (people, name, age) => {
    return people
    .filter((people) => people.age > 18)
    .reduce((category, people) => {
        if(people.age <= 20) {
            category.nameof().push(people)
        }
        if(people.age > 21 && people.age <= 30) {
            category.nameof("21-30").push(people)
        }
        if(people.age > 31 && people.age <= 40) {
            category.nameof(31-40).push(people)
        }
        if(people.age > 41 && people.age <= 50) {
            category.nameof("41-50").push(people)
        }
        if(people.age >= 51) {
            category.nameof("51 and older").push(people)
        }
        return category
    }, {
         : [],
        adult2 : [],
        adult3 : [],
        adult4 : [],
        adult5 : []
    })
}




module.exports = {groupAdultsByAgeRange}