let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())

// criar array com construtor

let myArray = new Array('a','b','c')
console.log(myArray)

// contar  elementos de um array

console.log(['a', {type: "array"},
    () => { return "ALO"},
][1].type)

let word1 = "manipulação"
console.log(Array.from(word1))

let techs = ["html", "css", "js"]

/*techs.push("nodejs")

techs.unshift("sql")

techs.pop()

techs.shift()

techs.slice(1, 3)

techs.splice(1, 1) */

let index = techs.indexOf('css')

console.log(index)

console.log(techs)

