//Métodos de manipular uma string, usando length e indexOf

/*
let nome = 'wilhams Desenvolvedor';

let result = nome.length;

console.log( result ); //o lenght me retorna a qauntidade de caracteres dentro de var nome 
//o result será 21
*/



/*
let nome = 'wilhams Desenvolvedor Web';

let result = nome.indexOf('Web');    //indexOf me retorna a posição do que estou buscando pelo parãmetro, ele me retorna a posição em que meu intem começa
                                    //se o indexOf não encontrar nada ele me retorna -1, esse valor é padrão  
                                   //para algo mais abrangente sobre indexOf, acesse o mozila

console.log(result);
*/



//Aplicação mais usadas em projetos/ o indeOf me retorna o valor q estou procurando, olhe o exemplo abaixo

/*
let nome = 'wilhams Desenvolvedor Web';

let result = '';

if(nome.indexOf('Web') > -1 ) {   //indexOf é caseSensitive, se uma letra for minuscula e outra maiscula ele não vai reconhecer
    result = "Achou!";           //se vc tirar esse -1 e por acasso o valor do parãmetro não tiver dentro da var o código não cairá no else
} else {                        
    result = "Não Achou!";
}

console.log(result);
 */

                       //SLICE, SUBSTRING and SUBSTR  é o mais utilizado 99% dos casos



//O slice pega a string do início que vc quiser até o final q vc quiser, os número 0 e 10 representam isso
//poderia ser de 5 á 12 ou outro número, qq número que vc quizesse, posso colocar apenas um némero no parãmetro também
//ele irá pegar a posição q vc colocou e o restante
//o método   substring    faz exatamente essa mesma função
//se vc colocaR no slice um menos quatro como por exemplo NO PARÂMETRO ele comecará a contar os ultimos caracteres
//da string e pegará as últimas letras, essa é a diferença do slice e do substring
//TAMBÉM POSSO FAZER ISSO nome.slice(-6, -10);
//também usamos o substr

/*
 let nome = 'wilhams Desenvolvedor Web'; 

 let result = nome.slice(0, 10); //ele vai contar os caracters de 0 á 10

 console.log(result); //retornará -> wilhams De
*/

//SUBSTR é o mais utilizado 99% dos casos

/*
let nome = 'wilhams Desenvolvedor Web'; 

let result = nome.substr(8, 13);  //nesse dois parãmetros, o 8 siginifica de onde devo começar a pegar os números
                                  // e o 13 representa a quantidade de caracteres á pegar
console.log(result); 
*/

/*
let nome = 'wilhams Desenvolvedor Web'; 

let result = nome.substr(-5, 5);   //- 5 ele começa a contar de trás pra frente, então começará no r e pegará 5 caracteres  
                                  
console.log(result); 
*/



//Métodos pra manipular strings  -> Usando o replace 

/*
let nome = 'wilhams Desenvolvedor Web'; 

let result = nome.replace('Web', 'FullStack'); //recebe dois parãmetros, um parãmetro é pesquise por x e o outro parãmetro é substitua por y

 console.log(result);  //wilhams Desenvolvedor FullStack
 console.log("nome:", nome); //wilhams Desenvolvedor Web , note q só foi alterado na let result, ele não altera direto na let nome
 console.log("resultado:", result); //wilhams Desenvolvedor FullStack
*/


//                         Usando o split
//split transforma uma string em uma array


/*
let nome = 'wilhams Desenvolvedor Web'; 

let result = nome.split(' ');

console.log(result);
*/

//(3) ["wilhams", "Desenvolvedor", "Web"]
//ele gera um array com 3 posiçoes, o parãmetro usado foi um espaço, ou seja, onde o split encontrar o espaço
//ele vai parar e fazer uma array, se ele encontrar outro espaço ele para e gera um outro array, dessa forma
//ele me gerou um array com 3 posiçoes



let nome = '1,2,3,4,5,6,7,8,9,10'; 

let result = nome.split(' ');//há diferenças se colocar com espaço ou sem espaço, veja o que o console mostrou

console.log(result);