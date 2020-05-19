

//document.querySelector = ele seleciona apenas o item que vc chamou
//document.querySelectorAll = seleciona todos os itens me retornando uma array, logo pra altera-los preciso de um for
//se vc tentar alterar um SelectorAll sem um for vc não conseguirá pq ele é uma array, vc precisa percorrer todos
//os itens com um for pra altera-los 

//No html temos uma duas lista, uma ul e outra ol, ambas tem a mesma classe, como então selecionar aqui pelo JS
//apenas uma lista já que ambas tem a mesma class?
//Dessa forma:

//document.querySelector('ol.lista').innerHTML = '<li>batata</li> <li>batata</li> <li>batata</li>';
//o código acima add li e troca o valor, e altera apenas os valores da ol.lista

//Pegando uma id com querySelector
//document.querySelector('#titulo').innerHTML = '<h1>Alterando o DOM</h1>';

//Pegando uma class com querySelector, se usa .lista pra pegar a classe, igual ao css
//document.querySelector('.lista').innerHTML = 'Alterado via JS';

//document.querySelectorAll('.lista');
//NodeList(2) [ul.lista, ol.lista]  retorno do console
//selectorAll pega todos os itens da class, sem excessão, e já me retrona um array, assim posso manipular cada item
//se eu coloco só o li, ele me trará todos os li, o console
//dessa forma:

//document.querySelectorAll('li'); //não use o sinal de ponsto final no li


//alterando a cor usando um for in, let i in lista = esse código percorre todo os campos da let lista e em seguida executa
//o código que foi mandando

let lista = document.querySelectorAll('.lista');


for(let i in lista) {
    lista[i].style.color = 'black';
}
