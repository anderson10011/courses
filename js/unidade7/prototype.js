// type convertion or type coersion

/* a soma abaixo de uma string e um numero ele faz uma coersao ou força transformar o 5 do
   tipo number em string */
console.log('9' + 5)

let string = "123"
console.log(Number(string))
let number = 123
console.log(String(number))

let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

let number1 = 564.565
console.log(number1.toFixed(2).replace(".",","))

let word1 = "programar é muito bacana"
console.log(word.toUpperCase().toLowerCase())

let phrase = "Eu quero Amor!"
console.log(phrase.includes("Amor"))
