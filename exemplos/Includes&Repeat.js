//Includes e Repeat é mais uma das novidades do EMCMAScript

//Vamos ver as funções includ e repeat

//includs serve tanto pra string como pra array
//includs serve pra pesquisar algo na array, ele retronará true ou false, se achar o objeto retorna true se não false
//com includs vc não precisa fazer um if e else pra saber se é true ou false, o próprio método includes faz isso

let lista = ['nome', 'email', 'endereço', 'telefone'];

console.log(lista.includes('sobrenome'));//false



//Repeat

let nome = 'Wilhams';
console.log(nome.repeat(3));//WilhamsWilhamsWilhams

//console.log( 'x'.repeat(20) );//xxxxxxxxxxxxxxxxxxxx