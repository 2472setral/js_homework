//3
let dictionary = {
    "кіт": "cat",
    "собака": "dog",
    "молоко": "milk",
    "яблуко": "apple",
    "дерево": "tree",
    "квітка": "flower",
    "сонце": "sun",
    "небо": "sky",
    "дощ": "rain",
    "гора": "mountain"
  };
  
  while (true) {
    let input = prompt("Введіть слово на українській мові:");
  
    if (input === null) {
      break;
    }
  
    let translation = dictionary[input];
  
    if (translation) {
      alert(`Переклад слова "${input}" - "${translation}"`);
    } else {
      alert(`Слово "${input}" ще не додано в словник!`);
    }
  }
  
  //4
  let originalArray = [1, 2, 3, 4, 5];
let newArray = [];

for (let i = 0; i < originalArray.length; i++) {
  alert(originalArray[i]);
  newArray.push(originalArray[i]);
}

alert(`All list - ${newArray}`);