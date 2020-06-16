// const nome = "Solano";
// const peso = 76;
// const altura = 1.81;

// const imc = peso / (altura * altura);

// if(imc >= 30){
//     console.log(`${nome} você ESTÁ acima do peso`)
// }else{
//     console.log(`${nome} você NÃO está acima do peso`)
// }

// const nome = "Solano";
// const sexo = "F";
// const idade = 50;
// const contribuicao = 35;

// const somaContribuicao = idade + contribuicao;

// if(somaContribuicao >= 95){
//     console.log(`${nome} você PODE aposentar`)
// }else{
//     console.log(`${nome} você NÃO pode aposentar`)
// }

// const empresa = {
//     nome: "Solano",
//     cor: "Roxo",
//     Foco: "Programação",
//     endereco: {
//         rua: "Ernesto Baffi",
//         numero: 231
//     }
// };

// console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

// const dadosProgramador = {
//     nome: "Solano",
//     idade: 22,
//     tecnologias: [
//         {
//             nome: "C++",
//             especialidade: "Desktop"
//         },
//         {
//             nome: "Python",
//             especialidade: "Data Science"
//         },
//         {
//             nome: "JavaScript",
//             especialidade: "Web/Mobile"
//         }
//     ]
// }


// console.log(`O usuário ${dadosProgramador.nome} tem ${dadosProgramador.idade} anos e usa a tecnologia ${dadosProgramador.tecnologias[0].nome} com especialidade em ${dadosProgramador.tecnologias[0].especialidade}`);



// const usuario = [
// {
//     nome: "Solano",
//     tecnologias: ["JavaScript", " CSS"]
// },
// {
//     nome: "Ranielle",
//     tecnologias: ["Python", " PHP"]
// },
// {
//     nome: "Luzia",
//     tecnologias: ["Ruby on Rails", " C#"]
// }];

// for(let i = 0; i < usuario.length; i++){
//     console.log(`${usuario[i].nome} trabalha com ${usuario[i].tecnologias}`)
// }


// const usuario = [
// {
//     nome: "Solano",
//     tecnologias: ["JavaScript", "CSS"]
// },
// {
//     nome: "Ranielle",
//     tecnologias: ["Python", "PHP"]
// },
// {
//     nome: "Luzia",
//     tecnologias: ["Ruby on Rails", "C#"]
// }];


// function checkCSS(usuario){
//     for(let tecnologia of usuario.tecnologias){
//         if(tecnologia == "CSS")
//             return true;                
//     }   
//     return false 
// }

// for(let i = 0; i < usuario.length; i++){
//     const checarUsuario = checkCSS(usuario[i]);
//     if(checarUsuario){
//         console.log(`O usuário ${usuario[i].nome} usa CSS`);
//     }
// }

// const usuarios = [
//     {
//         nome: 'Salvio',
//         receitas: [115.3, 48.7, 98.3, 14.5],
//         despesas: [85.3, 13.5, 19.9]
//     },
//     {
//         nome: 'Marcio',
//         receitas: [24.6, 214.3, 45.3],
//         despesas: [185.3, 12.1, 120.0]
//     },
//     {
//         nome: 'Lucia',
//         receitas: [9.8, 120.3, 340.2, 45.3],
//         despesas: [450.2, 29.9]
//     }
// ]

// function calculaSaldo(receitas, despesas) {
//     let somaReceitas = somaNumeros(receitas)
//     let somaDespesas = somaNumeros(despesas)
//     return somaReceitas - somaDespesas
// }

// function somaNumeros(numeros) {
//     let soma = 0
//     for (numero of numeros) {
//         soma = soma + numero
//     }
//     return soma
// }

// for (let usuario of usuarios) {
//     const resultado = calculaSaldo(usuario.receitas, usuario.despesas);

//     if (resultado > 0) {
//         console.log(`${usuario.nome} possui saldo POSITIVO de ${resultado.toFixed(2)}`)
//     } else {
//         console.log(`${usuario.nome} possui saldo NEGATIVO de ${resultado.toFixed(2)}`)
//     }
// }


const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction){

    user.transactions.push(transaction)
    
    if(transaction.type === "credit"){
        user.balance += transaction.value
    }else if(transaction.type === "debit"){
        user.balance -= transaction.value
    }else{
        console.log("Invalido")
    }
}

function getHigherTransactionByType(type){
    let higherTransaction
    let highValue = 0
    for(transaction of user.transactions){
        if(transaction.type == type && transaction.value > highValue){
            highValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue(){
    let average = 0
    for(transaction of user.transactions){
        average += transaction.value
    }
    return average / user.transactions.length
}

function getTransactionsCount(){
    let countTransaction = {
        credit: 0,
        debit: 0
    }
    for(let transaction of user.transactions){
        if(transaction.type === "credit"){
            countTransaction.credit++
        } else if(transaction.type === "debit"){
            countTransaction.debit++
        }
    }
    return countTransaction
}


createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })


console.log(user.balance)
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))
console.log(getAverageTransactionValue())
console.log(getTransactionsCount())