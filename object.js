const person = {
  name:"Rakib",
  age: 30,
  friends: ['hero','rifat','Mamun'],
  details: {
    job: "yes",
    isMarried: "no",
    status: "not found"
  }
}
console.log(Object.keys());
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.values(person.details));

const person2 = {
  name:"Rakib",
  age: 30,
  1: 100,
  friends: ['hero','rifat','Mamun'],
  details: {
    job: "yes",
    isMarried: "no",
    status: "not found"
  }
}
console.log(person2['1']); // Bracket Notation
console.log(person2?.name?.age?.religion); // The way of Delete Error