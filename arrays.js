// let favSongs = [
//     "Hollywood Undead- Nightmare",
//     "Lil Peep- Move On Be Strong",
//     "Slipknot- Spit It Out",
//     "Papa Roach- last Resort"
// ];

// console.log(favSongs); //this reads out the array list into the console log
// favSongs[4] = "Black Veil Brides- The Gunsling"; //this adds/replaces a position of the array list with another item 
// console.log(favSongs);
// console.log(favSongs.length); //this reads out how many items are in your array list
// favSongs.push("Some generic pop song"); //this adds a new item to your list to the end of it (end of the list)
// console.log(favSongs);
// favSongs.pop(); //this removes the last added item into the array list
// console.log(favSongs)
// favSongs.shift() //removes first item in array list
let favWebs = [
    "thiswebsitegotdeleted",
    "google",
    "youtube"
];

console.log(favWebs);
favWebs.push("wearecodenation","rainbowsixsiege","ihatethiswebsite");
console.log(favWebs);
let removedWeblast = favWebs.pop()
console.log(`Removed last website in list: ${removedWeblast}`);
let removedWebfirst = favWebs.shift()
console.log(`Removed first website in list: ${removedWebfirst}`);
console.log(favWebs);
console.log(favWebs.slice(2)) //slices the array at a given index position temporarily
favWebs.unshift("Facebook"); //Adds new item to the beginning of your array
console.log(favWebs)
favWebs.splice() //Permanently splices an array at the given index
console.log(favWebs)

