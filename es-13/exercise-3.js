const sum =  (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide =  (a, b) => {
  return a / b;
}

const log =  (value) => {
  console.log(value);
}
log( divide( subtract( multiply( sum(2,4), sum(5,2) ), 2) ,5) );


//let firstSum = sum(2,4);
//let secondSum = sum(5,2);
//let moltiplication = multiply(firstSum,secondSum);
//let subtraction = subtract(moltiplication, 2);
//let division = divide(subtraction, 5)
//log(division)
//((2 + 4) * (5 + 2) - 2) / 5`
