let child = ("£8.00")
let adult = ("£10.95")
let senior = ("£7.50")
let age = 10000

if (age < 18)
{
console.log(child)
}
else if (age > 17 && age < 60)
{
console.log(adult)
}
else if (age >= 60 && age < 100) 
{
console.log(senior)
}
else
{
    console.log(`Incorrect age`)
}