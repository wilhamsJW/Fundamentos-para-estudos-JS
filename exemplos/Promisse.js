/**Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode
 *estar disponível agora, no futuro ou nunca.
  SINTAXE:
         new Promise(/* executor / function(resolve, reject) { ... });
  */


/*
function fazer() {
    return 'Ok';
}

console.log(fazer());//Ok
*/

//Promessa é usada pra retornar um valor ou não retornar, isso geralmente vem de um servidor, uma resposta ajax
//foi feito um settimeout pra executar a função em 3 segundos, pra substituir uma requisição ajax por exemplo, 

function fazer() {
    let promisse = new Promise( (resolve, reject) =>{

        setTimeout(() => {

               resolve('OK'); 

        }, 3000);

    }); 

    return promisse;
}

fazer().then((resposta) => {
    console.log("Resposta: " + resposta); //Resposta: OK
})

/**Uma promessa pendente pode se tornar realizada com um valor ou rejeitada por um motivo (erro). Quando um desses
 *  estados ocorre, o método then do Promise é chamado, e ele chama o método de tratamento associado ao estado 
 * (rejected ou resolved).  (Se a promessa foi realizada ou rejeitada quando o método de tratamento correspondente 
 * for associado, o método será chamado, deste forma não há uma condição de competição entre uma operação assíncrona 
 * e seus manipuladores que estão sendo associados.) */