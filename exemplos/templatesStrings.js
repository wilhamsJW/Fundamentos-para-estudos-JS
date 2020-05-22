//Templates strings são uma novidade do ECMAscript

let nome = 'Wilhams';
let idade = 23;

//let frase = 'meu nome é ' + nome + ' e eu tenho ' + idade + ' anos,' + 'e ano que vem, eu farei ' + ( idade+1);
//essa maneira acima é a maneira tradcional 

//abaixo faremos com templates strings, elas são representadas por uma crase, ou uma aspa apontada para a esquerda
let frase = `Meun nome é ${nome} e eu tenho ${idade} anos e ano que vem eu farei ${idade+1}`;



console.log(frase);