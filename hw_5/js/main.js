//4

const heading = document.getElementById("myHeading");
heading.style.color = "red";
heading.style.fontSize = "24px";
heading.style.fontWeight = "bold";

//5

const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "blue";
  paragraphs[i].style.fontSize = "18px";
}
const secondParagraph = document.getElementById("secondParagraph");
secondParagraph.textContent = "Змінений текст другого параграфа";

//6

const myList = document.getElementById("myList");
const newFirstElement = document.createElement("li");
newFirstElement.textContent = "Новий перший елемент";
myList.prepend(newFirstElement);
const newLastElement = document.createElement("li");
newLastElement.textContent = "Новий останній елемент";
myList.appendChild(newLastElement);
