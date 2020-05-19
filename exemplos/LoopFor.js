

//Existem dois tipos de for, sendo eles: For loop e for in loop array
//o for consiste em três etapas, a primeira é acriação das variáveis, a segunda é a condição da var e a terceira é
// a incrementação, é a incrementação que vai dizer pra var como ela chegará até 50

/*
let texto = '';

for ( let i = 1; i <= 50; i++) {
    texto = texto + i + '<br/>'; //quando digo que texto é igual a texto, quero dizer o seguinte:  a var texto é igual á ela mesmo + as alterações que foram feitas, preciso fazer exatamente assim
};                              //pq se digo que texto é igual á outra coisa, ele vai ser apenas outra coisa e deixará de ser o que era antes, usso essa forma quando quero manter o valor atual da var e acrescentar mais alguma coisa

document.getElementById('demo').innerHTML = texto;
*/






//for in loop array, conheça o -> for in usado para arrays
//O laço for in interage sobre todas as propriedades da var carros como no exemplo abaixo, for in tem acesso
//a todos os intens de carros, sendo assim for in retorna uma string com todos as propriedades de carros
//retorna também seus respectivos valores
//O laço for...in somente iterage sobre propriedades enumeradas, como o array
//use for in dessa forma: crie uma var chamada i, coloque o operador in e por fim coloque a var
//ex.: for (let i in carros) -> isso percorrerá todos os campos e mostrrá seus valores




let carros = ['ferrari', 'fusca', 'palio', 'logan', 'rangerover']

let html = '<ul>';
                                                 

for (let i in carros) {
    html += '<li>' + carros[i] + '</li>';
}


html = html + '</ul'; //ou dessa forma -> html += "</ul>""; //a explicação no código acima ajuda a entender esse html = html

document.getElementById('demo').innerHTML = html;