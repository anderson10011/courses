// function expression
// function anonymous
const sum = function(number1, number2){ // parametros
    let total = number1 + number2
    return total
}

console.log(number1)

let number1 = 34
let number2 = 25

sum(number1, number2) // argumentos de uma funcao
/*sum(number1, number2)
sum(number1, number2)*/

console.log(`a soma é: ${sum(number1, number2)}`)

// Função é um liquidificador

function fazerSuco(fruta1, fruta2){
    return fruta1 + fruta2
}

const copo = fazerSuco('banana','maçã')

console.log(copo)