let temp = "50c";

function transform(temp){
    const celsiusExists = temp.toUpperCase().includes("C");
    const fahrenheitExists = temp.toUpperCase().includes("F");

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado');
    }

    let updateTemp = Number(temp.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit-32) * 5/9;
    let tempSign = 'C';

    if(celsiusExists){
        updateTemp = Number(temp.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32;
        tempSign = 'F';
    }

    return formula(updateTemp) + tempSign;
}

console.log(transform('50c'));
console.log(transofrm('50f'));
transform('50z');