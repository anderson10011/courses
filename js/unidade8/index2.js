let one = 1
let two = 2

// == igual
console.log(one == 1)
console.log(one == "1")
// != diferente
console.log(one != two) // true
console.log(one != 1) //false
console.log(one != one) //false
// === estritamente igual
console.log(one === "1") //false
console.log(one === 1) //true
// !== estritamente diferente
console.log(two === "2") //false
console.log(two === 2) //true
// > Maior
console.log(one > two) //false
console.log(two > one) //true
// >= Maior igual
console.log(two >= one) //true
// < Menor
console.log(two < one) //false
// <= Menor igual
console.log(two <= one) //false