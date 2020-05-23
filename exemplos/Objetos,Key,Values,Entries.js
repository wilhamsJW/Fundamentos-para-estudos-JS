//Também são novidades do ECMAScript

//let list = [1,2,3,4,5];
//console.log(typeof list);//object, typeof me diz o qu lista é um objeto porém é um array, mas basicamente é um objeto também

//Key, Values e Entries funcionam em arrays e objetos, é tanto q o typeof de ambos são objetos, dei um typeof apenas
//para mostrar que ambos são objetos


//Trabalhando com objetos


//keys me traz a posição de cada item de dentro do meu array
//values me traz os valores

/*
let list = ['name', 'email', 'endereço', 'telefone'];

//console.log(Object.keys(list)); //(4) ["0", "1", "2", "3"]
//console.log(Object.values(list)); //(4) ["name", "email", "endereço", "telefone"]


//entries 
console.log(Object.entries(list)); // [Array(2), Array(2), Array(2), Array(2)], reparem que ele criou um array e dentro desse array
                                  //ele criou mais 2 itens, dentro desses itens tem o index do item e o valor do item, dessa forma:
                                 //["0", "name"], ["1", "email"]
 */

 


 let pessoa = {
     nome:'wilhams',
     sobrenome:'meira',
     idade:'23',
 }

//console.log(Object.keys(pessoa));//(3) ["nome", "sobrenome", "idade"], foi retornado um array com os nomes das propriedades 
                                 //do meu objeto ou seja ele me trás as chaves do meu objeto, as chaves são: nome, sobrenome e idade


//console.log(Object.values(pessoa)); // ["wilhams", "meira", "23"],  me retornou os valores das propriedades do objeto

console.log(Object.entries(pessoa));//do mesmo jeito q o entry á cima, leia o entries acima e entenderá