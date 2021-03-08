// function scope
let subject

function createThink(subject){
    return subject
}

console.log(createThink(subject))

//function hosting

sayMyName()

/*function sayMyName(){
    console.log('anderson')
}*/

const sayMyName = function(){
    console.log('anderson')
}

