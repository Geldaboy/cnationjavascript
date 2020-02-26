/*
const coffeeOrder = (size, type) => {

console.log(`One ${size} ${type} coming right up`);
}
coffeeOrder ("really medium", "mocha");
coffeeOrder ("really small", "latte")
coffeeOrder ("really big", "expresso")
// these are functions containing parameters
const completeSentence = (name, age, favColour) => {

    console.log(`Hi my name is ${name}, I am ${age} years old and my favourite colour is ${favColour}.`);
}
completeSentence ("Samuel", "24", "red")

const sandwichOrder = (filler1, filler2, filler3) => {
    console.log(`Here is your ${filler1} ${filler2} ${filler3} sandwich`)
};
sandwichOrder ("Meat", "mayo", "veg")
sandwichOrder ("fish", "bacon", "egg")

let orderCount = 0;
const takeOrder = (topping1, topping2, topping3) => {
    orderCount++;
    console.log(`Order ${orderCount}: Pizza with ${topping1},${topping2} and ${topping3}. `);
 return orderCount
}
takeOrder(`pineapple`);
takeOrder(`mushroom`)
/** */
/*
let myAmount = 500;
let pinNumber = 1234;
//let enterPin = 1234;
const cashMachine = (enterPin1, takeAmount) => {
    if(myAmount >= takeAmount && pinNumber == enterPin1){
    console.log(`Welcome user, here is your £${takeAmount}`)
    myAmount -= takeAmount
    console.log(`Remaining balance is £${myAmount}`)
}
else if (enterPin1 != pinNumber) {
    console.log(`No sorry, you are a thief, stop guessing pins`)
}
else if (myAmount < takeAmount){
console.log(`Nuh uh, no money for you today with your low digit balance`)
}
else{
    console.log(`Stop breaking my atms code :(`)
}
}
cashMachine (1234, 64)
/** */

//the line underneath is a function for subtraction
const subtraction = (amount1, amount2) =>
{
result = (amount1 - amount2)
console.log(`${amount1} - ${amount2} = ${result}`)
}
subtraction (100, 50)

//the line underneath is a function for division
const division = (amount3, amount4) =>
 {
  result = (amount3 / amount4)
  console.log(`${amount3} / ${amount4} = ${result}`)
 }
division (10000, 33)
//the line underneath is a function for multiplication but I enter the code in a different way and it still works
const multiply = (amount5, amount6) =>
 {
  console.log(`${amount5} x ${amount6} = ${amount5 * amount6}`)
 }
multiply (5, 2)

