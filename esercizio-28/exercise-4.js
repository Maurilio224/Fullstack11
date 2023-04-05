//function sum(num1, num2, num3) {
//  return num1 + num2 + num3;
//}


//const numbers = [1, 2, 3];

function sum(...num) {
  return num.reduce((a,b) => a + b);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
