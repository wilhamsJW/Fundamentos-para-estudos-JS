//                         toString

/*
let list = ['email', 'telefone', 'endereço', 'nome'] ;

let result = list.toString(); // toString coloca uma vítgula entre um texto e outro e concatena, transformando um array em uma string

console.log(result); // resultado = email,telefone,endereço,nome / sem o toString(); o resultado será = ['email', 'telefone', 'endereço', 'nome'] 
*/


//                           join


/*
let list = ['email', 'telefone', 'endereço', 'nome'] ;

let result = list.join('-'); //coloca um separador entre um item da array e outro, o separador é especificado pelo parãmetro
                            //e tranforma em uma string tbm
console.log(result);       // resultado = email-telefone-endereço-nome
*/


//                          indexOf

/*
let list = ['email', 'telefone', 'endereço', 'nome'] ;

let result = list.indexOf('nome'); //ele procura o que foi especificado pelo parãmetro dentro array e me retorna
                                  //a posição desse elemento.. se vc digitar um número que não existe ele trará -1, isso é padrão da funçaõ indexOf
                            
console.log(result); //resultado = 3  a posição de nome    
*/

//if e else com indexOf
/*

let list = ['email', 'telefone', 'endereço', 'nome'] ;

       if (list.indexOf('nome')) {
           console.log("Achou")
       }  else {
           console.log('Não achou')
       }
*/                               
                            
 
//                                    pop

/*
let list = ['email', 'telefone', 'endereço', 'nome'] ;

list.pop();//remove o último item   

let result = list.toString();
                            
console.log(result); //email,telefone,endereço
*/



//                                  shift


/*
let list = ['email', 'telefone', 'endereço', 'nome'] ;

list.shift();//remove o primeiro item   

let result = list.toString();
                            
console.log(result); //telefone,endereço,nome
*/


//                                  push


/*
let list = ['email', 'telefone', 'endereço', 'nome'] ;

list.push('nacionalidade');//adiciona um item a array   

let result = list.toString();
                            
console.log(result); //email,telefone,endereço,nome,nacionalidade
*/

// outra forma de add um item

/*
let list = ['email', 'telefone', 'endereço', 'nome'] ;

list[2] = 'nascimento';  //o dois indica o item q eu quero substituir pelo 'nascimento'; 
                        //pra add um item basta  colocar um número a mais e colocar o que vc quer colocar
                       //neste exemplo temos apenas 3 itens, se quiser add mais coloque o número 4

let result = list.toString();
                            
console.log(result);
*/ 


// add um item coma ajuda do length
//length é a quantidade itens q existe no meu array, mas não pe recomendado, o ideal é usar p push q foi feito pra isso

/*
let list = ['email', 'telefone', 'endereço', 'nome'] ;

list[ list.length ] = 'nascimento'; //o length add o item

let result = list.toString();
                            
console.log(result);
*/



//Métodos de array 02                       excluindo item   com   splace


/*
let list = ['email', 'telefone', 'endereço', 'nome'] ;

 list.splice(1, 1);  //o parãmetro 1 é a posição do array que quero deletar, parãmetro dois é q quantidade de itens
                    //que quero remover, o 1 é o telefone e o outro 1 representa a qauntidade de item que quero excluir
                   //ou seja quero excluir apenas 1 item

let result = list.toString();
                            
console.log(result); //email,endereço,nome

*/


//                                 concatenando arrays com concat

/*
let list = ['email', 'telefone', 'endereço', 'nome,'];
let list2 = ['idade', 'estado civil', 'profissão'];


let result = list.toString().concat(list2); //concat concatena a duas strings porém posso fazer isso com +
                            
console.log(result); 
*/


//                         sort and reverse         alinhando itens

/*
let list = ['email', 'telefone', 'endereço', 'nome'] ;

list.sort().reverse();  //sort coloca os itens em ordem alfabética // reverse inverte a ordem alfabética 
                       //pode se usar ou outro, não necessariamente juntos
                      //reverse usado sozinho só inverte a ordem que os itens já se encontram, colocando-os de trás p frente 
let result = list.toString();
                            
console.log(result); //telefone,nome,endereço,email / o sort colocou em ordem alfabética e o reverse reverte a ordem alfabética
*/