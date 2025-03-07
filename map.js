const numbers = [1,4,3,5,6,7];
let temp = [];
for(let index = 0; index < numbers.length; index++){
  const element = numbers[index];
  const sum = element + 1;
  temp.push(sum);
}
console.log(temp);

// Map always return Array but here 1 line arrow function used that's why return is not necessary

// const newArray = numbers.map(value=>value+1);
const newArray = numbers.map(value=> {
  return value + 1;
});
console.log(newArray);

const numbers2 = [1,2,3,4,5,6,7];
const squareArray = numbers2.map(element => element*element);
console.log(squareArray);

const friends = ['rakib', 'rifat', 'mahfuz', 'shohidullah'];


const newFriends = friends.map(element => {
  return element;
});
console.log(newFriends);