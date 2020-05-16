//  INTRODUÇÃO AO JavaScript


                                                      //Sinais de atribuição JS

/*  
/= --> Dividir
* (astericos) --> multiplicar
++ --> soma ou concatena de um em um
-- (dois simbolos de menos ou hifén) --> subtrai de um em um 
= --> Atribuição
== --> Comparação de igualdade
!= --> Comparação de diferença
=== --> Comparação de igualdades e tipos, 
compara se são iguais e tem o mesmo tipo
*/


//AVISO:
//esses exemplos só serão mostrados no broswer se vc for até os arquivos de exemplos 
//pq lá tem o hmtl e a chamada do link javascript pra esse arquivo

/*
var a = 5;
var b = 7;

if ( a == b  ) {
    alert ("eles não são diferentes");
} else {
    alert("eles são diferentes")
}
*/


/*
//cpf tem q ser colocado entre strings pq é número que não pode ser somado com outro

var cpf = "6754758647";
var idade = 28;
 
 if (cpf === idade){
     alert("ela são super iguais")
     foi colocado strings no alert prq se trata de uma frase, se fosse uma operação teria q ser
     sem aspas
 } else {
     alert(
         "elas não são super iguais"
     )
 }
*/






                                                                         //INCREMENTAÇÃO
//var a = 5;
//var b = a / 2;
//alert(b);
//alert sem strings pq se trata de uma operação
// Abaixo exemplo de operação com incremento

/*
var a = 5;
 a = a + 2;
alert(a);
*/
//outra forma de incremento, o resultado no alert será 7    

/*
var a = 15;
a /= 3; // /= é dividir
alert(a);
*/
//posso incrementar com qq operador: sendo eles o de adição. multpli., divisão e subtração


/*
var a = 15;
a ++;
//esse tipo de incremento se usa ++ ou -- ambos diminuem ou soman de um em um
alert(a);
*/









/*                                                    --->   Tipos de estrututa de repetição:
   ---> while
       Primeiro cria-se uma var de índice e atribui um valor -> var i = 1;
       esse laço de repetição ou loop se faz com um condição de existençia
       ex: o passo só será executado quando i for maior que 10, e do jeito que está não vai acontecer nada pq i 
       não é maior que 10. Um código assim fica um loop infinito e travará o navegador. Então pra isso não acontecer
       é necessário colocar o i++ para incrementar valor ao i, visto que 1 não é maior que 10 ele precisa do i++ para
       se tornar maior que 10, irá aumentando de 
       1 em 1. se vc for no console.log 
       irá ver q a página só carregou pq foi incrementando um número de um em um.
*/       


/*
        var i = 1;
   while (i > 10) {
       console.log("passo: " + i);
       i++;
      
   }
  */ 
   
  

/*
   ---> do while:
        Ele faz o que se manda primeiro pra depois testar a condição de existençia
        mesmo i sendo maior q 6, ele irá executar o passo do console.
        Ex. abaixo:
*/

/*
var i = 7;
   do {
    console.log("passo: " + i);
    i++;
 }
   while (i < 6) 
*/           
   

/*
   ---> for:
         Ele podemos dizer que é mais eficiente e mais rápido que os outros dois
         Ex. abaixo:
*/

/*
   for (var i=8 ; i < 10 ; i++ ) {
    console.log("passo: " + 1);
}


  for (var i=1 ; i < 10 ; i += 2 ) {
    console.log("passo: " + 1);
}
*/

/**
 * Explicaçoes sobre o for:
 * O For é a estrutura de repetição mais usada e eficiente
 * Nele declaramos o valor da var dentro do seu própro parãmetro ejá colocamos toda
 * a estrutura de repetição dentro do parametro
 * 
 * var i=1 , signica o valor da var
 * i < 10 , siginifica que enquanto i for menor q 10, execute este passo -> i += 2
 * i += 2 , siginifica acrescentar ou concatenar um valor de 2 em 2, ou seja seão executados
 * 5 passos para q i se torne igual a 10 e acabe minha estrutura de repetição, isso é visto 
 * pelo console.  
 *
 */

   

    




/*

                                                                                ---> Funçôes:






         Existe dois tipos, função de execuão e função de retorno
    ---> Função de execução:
          sintaxe:
          o primeiro nome é sempre um verbo no inifitivo do presente, ex: correr, pular..
          o segundo nome começa sempre com letra maiusculas e outras minusculas
          ex:  
          function nomeDafunção(){
              console.log(""); //entre as chaves se coloca o o que vai ser executado
          }
           nomeDafunção(); 
           é de suma importancia chamar a função após invocar ela, se chama ela colocando
           seu nome e colocando parenteses -> ();



                                                                        ---> Função de execução:
               */
              
            //função de execução vc tem que chama-la após ser declarada, para q ela execute o q tem no escopo dela
              /*
              function nomePoderoso(){
                console.log("jeová");
            }
             nomePoderoso();
             */
             



             /*
    ---> Função de retorno: 
    //ela tem um parãmtro no qual esse parãmetro irá ser calculado com alguma operação 
    //esse parametro em um programa ou algum site q precise fazer calculo será dado pelo o usuário, ou seja
    //o parãmetro é dado pelo usuário
    //na função 01 retornará a função de celsiu pra farenheinthe
    //na função 02 será retornado a média ao aluno após os calculos devidos
    */




      /* function converterTemperatura(celsius){
        var fah = (celsius * 1.8) + 32;
          return fah;
       }
          var fahreinhet = converterTemperatura(30);
            console.log(fahreinhet);
      */     
      
      /*
            function calcularNota(nota){

                var nota = (nota / 3);
                return nota;
            }
              var media = calcularNota(30);  
              console.log(media);
               */




               //                                                        ---> FUNCAO CALCULAR DIÁRIA 
               
               /*

               function calcularDiaria(){
                return Math.round (40000 / 30);

                //Math.round arredonda pra média, se tiver 1,5 ele aumenta p 2

                //Math.ceil arrendonda sempre pra cima, se tiver 1,1 ele aumenta p cima

                //Math.floor arrendonda sempre pra baixo, se tiver 1,9 ele abaixa pra um

                //temos tbm o toFixed(2); ele deixa apenas duas casas decimais

                // exemplo do toFixed: return (40000 / 30).toFixed(2);       
            }
               var diaria = calcularDiaria();
               alert(diaria);
            */ 







            //                                                          ---> FUNÇÃO COM PARAMETRO




            /*
            function calcularDiaria(salario,dias){
                return (salario/dias).toFixed(2);
            }
               var diaria = calcularDiaria(8000,22);
               alert(diaria);
            */






            //                                                          ---> ESCOPO DE VARIÁVEL




            //Variável global é criada fora da função, e variável local é criada dentro da função.
            //Variavel global é vista, variável local só é vista dentro da função.

            /*
            var bonus; //esta é a váriavel global pois está fora da função
            function calcularDiaria(salario,dias){
                bonus = "seu bonus é  300";
                return (salario/dias).toFixed(2);
            }
               var diaria = calcularDiaria(8000,22);
               alert(diaria);
               alert(bonus);
            */






            //                       --->ARRAY                                          ---> ARRAY






            //O que é uma array? é uma sequençia de dados numerados de 0 á 1, podem ser do tipo strings e numeral
            /*
            var salada = new Array ("uva","laranja","abacate");
            //se eu tirar o new Array e colocar uma colchete o js já entende queé uma Array
            // ex.: var salada = ["uva","laranja","abacate"]

            // adicionar no inicio
            salada.unshift("manga");

            // adicionar no final
            salada.push("limão");

            // excluir o ultimo elemento
            //salada.pop();

            // excluir o primeiro elemento
            //salada.shift();

            console.log(salada);
            console.log( "numero de elementos:" + salada.length);

            //busca qq elemento, se não achar retornar -1
            var pesquisa = salada.indexOf("manga");
            salada.sort();
            //.sort coloca em ordem alfabética
            console.log("qual posição? " + pesquisa);
            //alert(pesquisa);

            */

            
            /*

            function ordenarNumeros(a,b){
                return a-b;
                //este return vai comparar os elementos e vê quem é maior e menor e organizar
            }
               var megasena = new Array(43,10,3,2,1,59);
               console.log(megasena);
               megasena.sort(ordenarNumeros);
               //tem que colocar o nome da função aqui para o .sort organizar 
               //.sort ordena os números de forma diferente, o pc entende que o2 tá
               //na frente do 1 e o 3 na frente do 2 e organiza assim
               // foi criada uma função para ordenar os numeros e essa função foi chamada dentro do .sort
               */









            //                                                        ---> TRABALHANDO COM NÚMEROS:                                                                                                                                                        
            
            /*
            var x = 4;
            var y = 3;
            var z = 7;

            console.log(Math.max(x,y,z));
            //me trás o maior número -->Math.max
            //me trás o menor número -->Math.min

         var numero="2222";
         var calculo;

         calculo = Number(numero) * 2;
         //o number converte o valor da string em número, iria funcionar sem ele mas o mais correto é assim.
         console.log(calculo);

        */    

         /*
           Math.ceil(Math.random()*60);
           //cria um sorteio

             //Math.round arredonda pra média, se tiver 1,5 ele aumenta p 2

                //Math.ceil arrendonda sempre pra cima, se tiver 1,1 ele aumenta p cima
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





          
               //                                     ---> COMO TRABALHAR COM STRINGS charAt();







               // Objetivo do charAt é pegar o primeiro objeto ou o primeiro nome de determinada pessoa
               // isso é usado em e-mail para pegar o nome de alguém, note um exemplo abaixo
               // de como pegar a primeira palavra.





               /*
               var frase = "Seu time fez um gol"
               var primeira = frase.charAt();

               //quando se coloca o charAt(); é como q vc falasse assim: Me traga o primeiro elemento 
               //da variável frase, e acrescentando o while vc trará mais elementos e assim trará a primeira
               // palavra por inteiro da variável frase
               //na verdadem não há necessidade de criar uma var chamada primeira, apenas colocandoo frase.charAt()
               //daria certo.

               var letra = "";
               //aqui se criou um var chamda letra

               var primeira_palavra = "";
               //outra chamada primeira_palavra

               var i = 0;
               //aqui começou a estrututa de repetição while

               while ( letra != " " ){
               //dentro do parãmetro while tá escrito assim: Enquanto a var letra for diferente de " "
               //foi coloado um espaço dentro das aspas só para ficar diferente da var letra que.
               //dessa forma letra sempre será diferente e sempre excutará o próximo comando dentro das chaves

                   letra = frase.charAt(i);
               //aqui foi dito que letra é igual a var frase porém usando o charAt.(); eu pego apenas o primeiro 
               //elemento da var frase. 
               //como estamos fazendo um while ele irá concatenar e repetir os valores achados em var frase
               //dessa forma essa estrututa de repetição chamada while irá concatenar ou juntar todas as letras até
               //chegar o primeiro espaço onde começa outra letra,(trazendo assim a primeira palavra) observe que
               //se vc tirar um espaço entre as palavras
               //ele irá lhe mostrar no console as duas palavras juntas
               //então quando digo que letra = frase.CharAt(i); a explicação é esta acima  

                   primeira_palavra += letra;
               //esta variável acima é quem vai ser chamda no console, aqui apenas se diz que a var
               //primeira_palavra é += letra; e letra é igual a frase.charAt, e frase.CharAt é igual
               //a primeira palavra da var frase. Pq com a estrutura de repetição criada foi possivel 
               //concatenar varios elementos, trazendo a primeira palavra.

                   i++
               // o i++ incremnta elementos de 1 em 1 até um fim determinado, nesse caso o limite é o espaço de
               //uma palavra e outra    
               } 
                console.log(primeira_palavra)

                //aqui me mostra o resultado da var primira_palavra que é = a var letra
                //a var primeira palvra poderia ter sido = á  frase.charAt(i); e não ter usado a var letra
                //a var letra não teve tanta função assim
                //se vc tirar a var letra ficará melhor pra entender e funcionará do mesmo jeito.
                
                

        

  



               //                                       ---> forma simplificada de trablhar com charAt:






               /*
              var frase = "Seu Time fez um gol"
              frase.charAt();

              
              var primeira_palavra = "";
              var i = 0;
              while (frase.charAt(i)  != " " ){
                  primeira_palavra += frase.charAt(i);
                  i++;
                  //o valor de 1 de inicio é zero porém ele irá concatenar até formar uma palvra
                  //ou ele irá concatenar até o limite de espaço de uma palavra e outra
              
              } 
               console.log(primeira_palavra)

           */








           //                                         ---> OUTRA FORMA SIMPLICADA DE charAt




               /*
               var frase = "5151 ";

               var nome = "";
               
               var i=0;
               
               while( frase.charAt(i) != " " ){
               
               nome += frase.charAt(i);
               
               i++;
               
               }
               
               console.log(nome);
               */






            //                                                  ---> TRABALHANDO COM SPLIT





            //objetivo do split é trazer o item desejado, ele cria uma espécie de array, numerando os itens de 0 á 1


              /* 
              var frase = "Wilhams/meira/júnior";
              var primeira_palavra = frase.split("/")[2];
              //dentro do parametro split se coloca o separador, se ele é virgula, espaço, barra etc
              console.log("olá " + primeira_palavra + ", Boa Noite, Tudo bem?");
              //só coloque aspas dentro do console se for pra concatenar com algo pra mostrar uma msg
             // o número 2 representa a posição do elemento q  eu quero trazer
             */




             //                                     ---> OUTRAs MANEIRAs DE PEGAR O PRIMEIRO ELEMENTO
               

             //o trim em ambos os casos é usado pra corrigir os espaços dentro da variável

             //var frase = "  Seu Time fez um gol  ";
             //console.log(frase.trim().split(' ')[0]); 


             //var frase = " Teu Time fez um gol  ";
             //console.log(frase.trim().slice(0, frase.trim().indexOf(' ')));






             //                                       ---> LETRAS MAIUSCULAS E MINUCULAS VIA JS



           
            //var nome = "corinthians campeão";
            //console.log(nome.toUpperCase());
            //toUppercase deixa letra maiusculas
            //toLowercase deixa todas minusculas
            


         
           
            



        










 



       

  






