//Também são novidades do ECMAScript

//let telefone = '5';

//console.log(telefone.padEnd( 9, '*' ));//5********, padEnd = este método possui dois parâmetos, o primeiro é a quantidade
                                        //de caracteres q eu quero q tenha e o segundo é um sinal q vai completar caso não tenha 9 caracteres
                                       //no lugar desse asterisco pode se usar qq coisa

//console.log(telefone.padStart( 9, '*' )); //********5, padStart = ele preenche a variável do lado esquerdo                                       






//Vamos supor que temos o número do cartão do crédito de algum usuário e queremos fazer uma verificação pra ver se 
//o cartão do usuário é dele mesmo, vamos fazer da seguinte forma, vamos mostrar os 4 finais números do cartão dele
//e perguntar se é este o cartão dele 

let cartão = '123456789';

let lastDigit = cartão.slice(-4); //slice está pegando os 4 últimos números

let cartãoMascarado = lastDigit.padStart(16, 'x');//o padStart está diznedo q tem q ter 16 caracteres e o complemento se não tiver é o x

console.log(`Este é o seu cartão? ${cartãoMascarado}`);//usando template string



