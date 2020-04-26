/**
 * PRIMEIRO PASSO PRA AVANÇAR NO JAVASCRIPT É COMPREENDER O DOM
 * 
 * DOM = Document Oject Model
 * 
 * Document = Documento da página web em Html
 * 
 * Object = São objetos todas as tags, como h1, a, p ... por aí vai
 * 
 * Model = Modelo de terminologia, engloba a estrutura que a página é montada, qual estrutura?
 * desde a tag html como seus objetos dentro, tipo: title, head, body, ul... e por aí vai 
 * 
 * 
 * 
 * 
 * Maneiras de pegar um elemento em Javascript
 * 
 *  document.getElementByild();
 * Tradução: documento pegue elemento por id. By = por ou para, id = a id atrubuída a algum elemento
 * dentro do parãmetro se coloca o nome da id desejada com aspas, como se usar isso? 
 * atribua uma variável e um nome e a partir daí manipule o elemento
 * Dessa forma: 
 *          var elemento = document.getElementByild("form");
 * 
 *  document.getElementsTagName();
 * Tradução: pegue elementos de tag name, note q tá no plural o nome elements, pq se imagina q pegue mais de uma tag
 * diferente document.getElementByild(); q é pra pegar apenas um id, como se usa?
 * Dessa forma:
 * 
 *           var elemento = document.getElementsTagName("li");
 * 
 * Nesse exemplo eu peguei um li de uma lista ul
 * 
 *  document.querySelector();
 *  docuement.querySlectorAll();
 */

var a = 5;
var b = 7;

if ( a == b  ) {
    alert ("eles não são diferentes");
} else {
    alert("eles são diferentes")
}