//4
let senseOfLife = 42;
function getSenseOfLife(otherSenseOfLife) {
  if (otherSenseOfLife !== undefined) {
    return otherSenseOfLife;
  } else {
    return senseOfLife;
  }
}

console.log(getSenseOfLife(50));
console.log(getSenseOfLife()); 

//5

function count(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log('Непідтримуваний оператор');
      return;
  }

  console.log('Результат: ' + result);
}

count(5, 3, '+'); 
count(10, 2, '*'); 
count(8, 4, '/'); 
count(7, 2, '^'); 


//6

function sortArray(numbers) {
    return numbers.sort(function(a, b) {
      return a - b;
    });
  }
  var array = [3, 1, 4, 2, 5];
  var sortedArray = sortArray(array);
  console.log(sortedArray);
  
//7

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(min(2, 5));
  console.log(min(3, -1));
  console.log(min(1, 1));
  