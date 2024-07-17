const findTheOldest = function(people) {
    let oldestPerson = {age: 0, person: null}
    people.forEach((person)=> {
        console.log(person)
        if (person.yearOfDeath){
            const age = person.yearOfDeath - person.yearOfBirth
            if (age > oldestPerson.age){
                oldestPerson.age = age
                oldestPerson.person = person
            }
        }
}   )
return oldestPerson.person
}
// Do not edit below this line
module.exports = findTheOldest;
