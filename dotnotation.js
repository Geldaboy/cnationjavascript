//console.log("Hello world".toUpperCase());
//console.log("Goodbye world")
//console.log("Hello".length);
//console log shows me the results in the console, length measures the length of a string, touppercase capitalises the string

console.log(Math.floor(Math.random()*11));
//math.floor returns an integer (whole number) less than or equal to the specified numbers

let space1 = "x"
let space2 = "x"
let space3 = "x"
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "

if(space1 == space2 && space2 == space3)
{
console.log(`Congratulations you have won`)
}
else if(space4 == space5 && space5 == space6)
{
console.log(`Congratulations you have won`)
}
else if(space7 == space8 && space8 == space9)
{
console.log(`Congratulations you have won`)
}
else 
{
console.log(`Nah ah`)
}

//naughts and crosses

/*let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " "; */
//Draw the grid
console.log("   |   |");
console.log(` ${space1} | ${space2} | ${space3}  `);
console.log("   |   |");
console.log("-----------");
console.log("   |   |");
console.log(` ${space4} | ${space5} | ${space6}  `);
console.log("   |   |");
console.log("-----------");
console.log("   |   |");
console.log(` ${space7} | ${space8} | ${space9}  `);
console.log("   |   |");

console.log("The 15th character is in caps".toUpperCase().charAt(14));
//console.log("HOW UNFORTUNATE").toLowerCase()
