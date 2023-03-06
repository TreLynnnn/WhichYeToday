//--- Easy
//create a variable and assign it a number
let favoriteNumber = 15;
//minus 10 from that number
let minusTen = favoriteNumber - 10;
//print that number to the console
console.log(minusTen)
//--- Medium
//create a variable that holds a value from the input
let userInput = Number(document.querySelector('input').value);
//add 25 to that number
let addTwentyFive = userInput + 25
//alert that number
alert(addTwentyFive)
//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', addTwo)

function addTwo(){
    console.log(addTwentyFive + minusTen)
}