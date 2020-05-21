/*
let newValue = Math.PI; //math pi, serve pra calcular seno, coseno, tangente, tudo relacionado a matemática
console.log (newValue);
*/

//let newValue = Math.round(3.50);  //arredonda pra cima ou pra baixo, até 3.49 ele considera como 3, á partir de
//console.log(newValue);           //3.50 ele considera como 4

//a funçâo floor(); sempre arrendonda pra baixo, pode ter 3.99 q ele vai arrendondar pra 3
//ceil(); sempre arredonda pra cima, mesmo q seja 3.01 será 04.



/*
var x = 4;
var y = 3;
var z = 7;

console.log(Math.max(x,y,z)); // = 7
//me trás o maior número -->Math.max
//me trás o menor número -->Math.min

var numero="2222";
var calculo;

calculo = Number(numero) * 2;
//o number converte o valor da string em número, iria funcionar sem ele mas o mais correto é assim.
console.log(calculo); // = 4444
*/



//                                                                      ---> SORTEIO MEGASENA




 /*   
  var sorteio;
 var mega = new Array();

   var i=0;
   while( i <6 ){
      sorteio = Math.ceil(Math.random()*6);
          if (mega.indexOf(sorteio) < 0 ) {
             mega.push(sorteio);
             i++;
           }
             // o i++ acrecentará números de um em um, como 0 não é maior que 6 ele precisa excutar 7 passos
             //para se tornar maior que 6
             // o indexOf com o if impossibilita o sorteio de repetir números, pq ele é < 0
          }
             console.log(mega);
          */


          
let newValue = Math.floor(Math.random() * 1000);
console.log(newValue); //sempre me gerará um número entre 0 e 1000, pode ser usado pra criar uma especie de id

   
          
         
          
