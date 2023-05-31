//4

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var number = 4;
var result = isEven(number);
console.log(result); 

number = 3;
result = isEven(number);
console.log(result); 
