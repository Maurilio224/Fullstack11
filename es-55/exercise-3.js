//metodo prima di aver visto i suggerimenti.
//function calculateAverageAge(persons) {
//  let sum = 0;
//  for(let i = 0; i < persons.length;i++){
//    sum = persons[i].age+ sum
//  }
//  return sum /persons.length
//};

function calculateAverageAge(persons) {
  
  let sum = persons.reduce( (accumulator,currentValue) => accumulator + currentValue.age,0);
  return Math.round(sum/persons.length)
};

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);