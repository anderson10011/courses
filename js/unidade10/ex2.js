let propriedades = {
    receitas: [60,1400,2500,4550,120,600],
    despesas: [50,1800,2000,2500,1000,400]
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value;
    }

    return total; 
}

function calculateBalance(){
    const calculateIncomes = sum(propriedades.receitas);
    const calculateExpenses = sum(propriedades.despesas);
    
    const total = calculateIncomes - calculateExpenses;

    const itsOk = total >= 0;

    let balanceText = "negativo";

    if(itsOk){
        balanceText = "positivo";
    }

    console.log(`Seu saldo é ${balanceText}:R$${total.toFixed(2)}`);
}


calculateBalance();