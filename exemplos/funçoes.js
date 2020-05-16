alert("funções");

function alterar () {

    document.getElementById("titulo").innerHTML = "Trocando o título com um função";
    document.getElementById("campo").value = "trocou o campo";

}

//alterar();//chamando a função pra que el funcione
//window.alterar();//chamando a função pra q ela funcione

//Função com parãmetro

function change (titulo) {

    document.getElementById("titulo").innerHTML = titulo; //o parãmetro não pode ter aspas, se não vira uma string
    document.getElementById("campo").value = titulo;

}

//change("Mudado com parãmetro");

function somar (x, y) {

    let total = x + y;
    return total;
    //document.getElementById("campo").value = total;
}

//somar(100, 5); //chamei a função e passei dois valores



//Função de Retorno


function caracteristicas (idade, altura ) {

    let total = "Minha idade" + " " + "é"  + " " + idade + " " + ", Minha altura é" + " " + altura ;
    
    return total;
    
   
}

var perfil = caracteristicas('23', 1.80);
console.log(perfil);