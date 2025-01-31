// Iteration 1: Names and Input
console.log("I'm ready!");

let hacker1 = 'Anneliese'
console.log("The driver's name is Anneliese.")

let hacker2 = 'Lorelei'
console.log("The navigator's name is Lorelei.")

console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    } else if (hacker2.length > hacker1.length){
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    } else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} + ${hacker2.length} characters!`)
    }

// Iteration 3: Loops
let upperCaseName = ''

for (let i = 0; i <= hacker1.length - 1; i++){
    upperCaseName+= `${hacker1[i].toUpperCase()} `
    // console.log(`${hacker1[i].toUpperCase()}`) //
}

console.log(upperCaseName.trim())

/* let reverseName = ''
for (let i = 0; i <= hacker2.length - 1; i++){
    reverseName+= `${hacker2[i]}`
} */

let splitString = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    splitString+= `${hacker2[i].split('')}`
}

console.log(splitString)

if(hacker1.localeCompare(hacker2) && hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if(hacker2.localeCompare(hacker1) && hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

/*console.log(reverseName.split())
let reverseNameSplit = reverseName.split()*/

// console.log(reverseNameSplit) -- nah this doesn't work //

/* for (const letter of hacker1) {
    console.log(hacker1.toUpperCase)
} */

/* for (let i = 0; i <= hacker1.length; i++){
    console.log(hacker1.toUpperCase)
} */

/* while (hacker1.le) ... infinite loop here */

/* console.log(hacker1[0].toUpperCase) --- this doesn't work either */
