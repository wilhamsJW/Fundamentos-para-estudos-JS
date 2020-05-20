//ToString transforma o número em um texto ou string

/*
let n = 10;

let result = n.toString() + 5 ;  //se vc colocar apenas a var n aparecerá no console o 10 de cor azul, indicando que é um número 
                           //se coloco o ToString o número 10 aparecerá preto, indicando q é um texto
                          //ToString também tem o poder de concatenar duas strings
console.log(result);
*/


/*
let n = 10;

let result = n.toString() + 5 ;  //ToString também tem o poder de concatenar duas strings
                                //o resultado desse + 5 será 105. pq juntou 10 + 5, ele não soma e sim concatena
                               //ou junta                  
console.log(result);
*/


//                           ToFixed             


/*
let n = 10.23456789;

let result = 'R$'+ n.toFixed(2); //me dará dois decimais após o ponto ou vírgula, mesmo q o resultado de uma conta seja enorme                                 //o resultado desse + 5 será 105. pq juntou 10 + 5, ele não soma e sim concatena
                                                 
console.log(result);
*/


/*
let n = '23';

let result = n + 5 ;                      

console.log(result); //o resultado será = 235, pq 23 é uma string, então ele concatenou n + 5
pra fazer com que ele some temos q transformar o 23 em um número pois '23' é uma string, fazemos isso 
na função abaixo com parseInt
*/


//                                                ParseInt

/*
let n = '23';

let result = parseInt(n) + 5; 

console.log(result); //resultado = 28
*/


//                                               ParsFloat
//usado para números com casas decimais


let n = '23.9';

let result = parseFloat(n) + 5; 

console.log(result); //resultado = 28.9
