//lembrando que um array não tem um nome como chave ou index, ele tem um némro que vai de 0 ao item q tiver no array

//let  info = ['wilhams', 'Meira', 'Junior', '@wilhams']

//let [ nomeCompleto, nome, sobrenome, instagram ] = info;

//console.log(nomeCompleto, nome, sobrenome, instagram);//wilhams Meira Junior @wilhams

//note que ao desconstruir as propriedades da array info, eu estou nomeando os itens, e posso nomear do que eu quiser
//a desconstrução do array acontece na ordem que ele tá sendo criado





//digamos q vc queira pegar da array info apenas o item -> Junior e @wilhams

/*
let  info = ['wilhams', 'Meira', 'Junior', '@wilhams']

let [ , , sobrenome, instagram ] = info; //é só deixar espaços vazio na variável

console.log(sobrenome, instagram); //Junior @wilhams
*/



//Criando uma var, criando um array e já desconstruindo eles

/*
let [nome, sobrenome, idade=23] = ['Wilhams', 'Meira']; //idade=23 é um valor padrão q eu criei, meu array não tem esse valor mas eu por alguma pecisão precisei criar esse valor padrão

console.log(nome, sobrenome); //Wilhams Meira
*/




//Desconstruindo uma array com function

/*
function criar() {

  let a = [1,2,3];
  return a;

}

let numeros = criar();

let [a,b,c] = numeros;
console.log(numeros);//(3) [1, 2, 3]
*/

//forma simplificada do mesmo código acima

function criar() {
   return [1,2,3]; //criamos um array, e retornamos o array
  }
  
  let [a,b,c] = criar(); //desconstruimos criando já as variáveis a,b,c, invocando a função
  console.log(a,b,c); //1 2 3
