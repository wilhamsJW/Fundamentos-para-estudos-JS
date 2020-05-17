//alert("enventos de teclado");

//onkeyup = é o ato de o usuário aperta e tecla e soltar, ou seja up = pra cima, então o evento
//só funciona quando a tecla tiver pra cima ou quando deixo de apertar ela
// <input onkeyup="digitou();"  id="inputt" type="text" name="usuário" value="nome do usuário" />
// chamdo dentro da tag dessa forma acima, consigo capturar no console quantas vezes o usuário digitou
// se ele copiar e colar um texto muito grande consigo ver isso, pq os caracteres não conrresponderá quanas vezes ele digitou 

//onkeydown é o contrário de onkeyup, ele funciona qunado a tecla tiver pra baixo ou pressionada, dow = pra baixo
//mude no html pra onkeydown e veja o console contabilizar as teclas d eoutra forma, segure um tecla e veja
//o console contar isso loucamente

//onkeydown pode ser usado em jogos, onde o usuário precisa está apertando a tecla sempre

//A letra e como parâmetro na função abaixo, siginifica event, este evnt está como parâmetro na chamda da função
//dentro do html, dessa forma: onkeydown="digitou(event); e o console evidentemente tem que ter o -> e
//com esta forma consigo obter peculiaridades das teclas, como o nome da tecla apertada e a numeração da tecla
//isso é extremamente importante para fazer interações do teclado com site, tipo uma calculadora, jogos etc ...

//esse código te traz algumas peculiaridades sobre a tecla q foi pressionada

/*
function digitou(e) {
    //alert("vc digitou");  
    console.log(e);
}
*/

//existe várias coisas q podemos fazer com as teclas, uma delas é determinar uma função quando o usuário aperta uma tecla
//por exemplo quando o usuário apertar enter podemos enviar  alguma msg ou simplesmente enviar a msg como uma
//postagem, com esta função abaixo consigo fazer com que a tecla enter sirva pra enviar o texto digitado para ver
//no console


function digitou(e) {

 if (e.keyCode == 13) { //tecla enter

    let texto = document.getElementById("campo").value;

    console.log(texto);
    //alert(texto);

 }

}

//A função será executada quando a tecla enter e a control ou o ctrl estiver pressionados, ou seja quando control + enter
//e.ctrlKey == true  =   tecla control for true ou estiver pressionada

function digitou(e) {

    if (e.keyCode == 13 && e.ctrlKey == true) { //tecla enter
   
       let texto = document.getElementById("campo").value;
   
       console.log(texto);
       //alert(texto);
   
    }
   
   }

   //essa lógica pode ser usada para várias combinações de botôes, Alt + shift, widows + r, etc..  