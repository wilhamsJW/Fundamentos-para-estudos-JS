//exemplo a baixo irá retornar a data completa com todas as informações possiveis

/*
let date = new Date();

console.log(date); //Thu May 21 2020 12:23:08 GMT-0300 (Horário Padrão de Brasília)
console.log(date.toString()); //Thu May 21 2020 12:30:29 GMT-0300 (Horário Padrão de Brasília)
*/

//forma mais resumida de mostrar a data

//let date = new Date();
//console.log(date.toDateString());   //Thu May 21 2020 , só retorna a data
//console.log(date.toUTCString());   //Thu, 21 May 2020 15:27:13 GMT , essa função tirou o nosso fuso horário do brasil e retorna a hora de  greenwich 


/* Método não muito utilizado.
let date = new Date(2020, 0, 1, 12,30, 12); //na class Date(); temos a opção de colocar 7 parãmetros ou apenas um
                                           //0 é o mês de janeiro, pois no JS tudo começa com 0, 1 é o dia, 12 é a hora, 30 é os minutos  e 12 é o segundos
                                          //o JS fará uma data em cima desses parãmetros
console.log(date);
*/

/*
let date = new Date('2020-01-01 15:45:17'); //colocado entre strings
console.log(date.toString());
*/

//let date = new Date(2020, 2);  //parãmetro de ano e mês
//console.log(date.toString()); //Sun Mar 01 2020 00:00:00 GMT-0300 (Horário Padrão de Brasília)

/*
let date = new Date(); //new Date é um objeto que tem todas as propriedades do tempo

let newValue = date.getHours(); 
/*
date.getFullYear();   //ano
date.getMonth();     //mês
date.getHours();    //hora
date.getMinutes(); //minutos
getSeconds();     //segundos
getTime();       //pega a quantidade de milisegundos entre 1970 de 1° de janeiros á meia noite até a data atual
*/
             
//console.log(newValue);


/*
let date = new Date();

date.setFullYear(2022); //troca o ano, e assim sucessivamente vc troca os meses e dia

let newValue = date;
console.log(newValue);
*/


//digamos q eu quero exibir uma informação ao usuário onde o prazo pra inscrição acaba em determinado dia
//então uso o set com getDate. exemplo abaixo

/*
let date = new Date();

date.setDate(date.getDate() + 7 ); //irá me retornar 7 dias pra frente, posso pedir 90 dias pra frente q automaticamente o JS entende que terá meses a frente

let newValue = date;
console.log(newValue); //Thu May 28 2020 13:18:57
*/



// Relógio digital, mostrando como se mostra as horas no browser


alert("script01")


var intervalo, agora;

//explicação de setDoisDigitos abaixo
function setDoisDigitos(tempo) {
    if(tempo<10) {
        return "0" + tempo;
    } else {
        return tempo;
    }
}

function mostrarHora() {
    agora       = new Date();
    var hora    = setDoisDigitos(agora.getHours());
    var minuto  = setDoisDigitos(agora.getMinutes());
    var segundo = setDoisDigitos(agora.getSeconds());

    relogio.innerHTML = hora + ":" + minuto + ":" + segundo;
    
}

function iniciar () {
    intervalo = setInterval(mostrarHora);
}

window.onload = iniciar;