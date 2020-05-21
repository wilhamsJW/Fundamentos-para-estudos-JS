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




//                                              map


/*
let list = [45, 4, 9, 16, 25] ;
let list2 = []; //criei uma nova array para mostrar ela com os números multiplicados na let list2

list2 = list.map(function(item){  //map percorre todos os itens da array e executa o código que se pede

    return item * 2; //multiplique os némros da minha aray

})

let result = list2;

console.log(result); //[90, 8, 18, 32, 50]
*/


// Também podemos fazer isso com um for in


/*
let list = [45, 4, 9, 16, 25] ;
let list2 = []; //criei uma nova array para mostrar ela com os números multiplicados na let list2

for (let i in list) {  //for in, percorre todos os campos da minha array executando o código que se segue

    list2.push(list[i] * 2 );

}

let result = list2;

console.log(result); //[90, 8, 18, 32, 50]
*/




//                                      filter();



/*
let list = [45, 4 , 9 , 16 , 25] ;
let list2 = [];

list2 = list.filter(function(item){  //filter só permitiu passar quem fosse menor q 20

    if (item < 20) {
        return true;
    } else {
        return false;
    }

});

let result = list2;
                            
console.log(result); 
*/




//                                     every();


/*
let list = [45, 4 , 9 , 16 , 25] ;
let list2 = [];

list2 = list.every(function(item){  //every = todos, se todos forem maior q 20 ele retorna true, se não é false
                                   //every avalia cada item e executa a ação lhe dada
                                  //todos tem que ter a execução da condição que lhe foi pedida
    if(item > 20){  
        return true;
    } else {
        return false;
    }

});

let result = list2;
                            
console.log(result); //false
*/



//                                    some();


/*
let list = [45, 4 , 9 , 16 , 25] ;
let list2 = [];

list2 = list.some(function(item){  //some = alguns, ele retorna true pq alguns números são maiores q 20
                                  //ele executa a primeira condição se ele achar pelo menos um item que conrreponda 
                                 //á primeira condição   
    if(item > 20){  
        return true;
    } else {
        return false;
    }

});

let result = list2;
                            
console.log(result); //true pq 25 é maior q 20
*/


// código usando every ou some só que de forma reduzida   usando if ternário

/*
let list = [45, 4 , 9 , 16 , 25] ;
let list2 = [];

list2 = list.every(function(item){    
 
        return(item > 20) ? true : false; // este é p if ternário, um atalho pra o if e else em alguns casos
                                         // os dois pontos -> :  , são o equivalente a ou, true ou false, também é if e o else 

});

let result = list2;
                            
console.log(result); 
*/





//                                            find and findeIndex
//nessa mesma função podemos usar o find ou findIndex
//find me retorna o item desejado
//findIndex me retorna a posição do item desejado


/*
let list = [
    {id:1, nome:'wilhams', sobrenome:'Meira'},     //objeto (0) dentro da array
    {id:2, nome:'paulo',   sobrenome:'rodrigo'},  //objeto (1) dentro da array
    {id:3, nome:'evandro', sobrenome:'Mesquita'},//objeto (2) dentro da array
] ;
let list2 = [];

list2 = list.find(function(item){  //find procura o item desejado   
                                  //posso procurar pelo ID, nome ou sobrenome  
       /* 
        if(item.sobrenome === 'Mesquita') {  //sobrenome é uma propriedade do objeto
            return true;
        } else {
            return false;
        }
       */
      
    //forma de if ternário
 
  /*  

    return(item.nome == 'paulo') ? true : false;
});

let result = list2;
console.log(result); 
*/