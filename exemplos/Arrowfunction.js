// Arrow functrion foi uma das atualizações do ECMAScript 06

//Tradução de Arrow Fucntion
//Arrow = flecha
//function = funçâo
//A novidade é que é uma função reduzida, mais prática


//Forma Tradicional
/* 
function somar(x, y) {
    return x + y;
}
console.log(somar(12, 7));//19
*/



//Adicionando uma função á variável somar e usando uma função anônima
/*
let somar = function(x, y) {
    return x + y;
    
}
console.log(somar(12, 7));//19
*/



//Agora fazendo a função com arrow function, arrow funtion é representada por este símbolo de flecha composto pelo 
//sinal de igualdade e maior, este sinal: => , após isso já abrimos o escopo da função com chaves: {}
//e o parâmetro da função é o x, y

/*
const somar = (x, y) => {
    return x + y;
}

console.log(somar(12, 7));//19
*/




//Uso sem as chaves
/*
const somar = (x, y) => x + y; //é interessante notar qsue vc não precisa usar as chaves {}, quando se trata de um 
                            //return, pode se colocar a ação direta q o resultado será o mesmo

console.log(somar(12, 7));//19
*/





//Modo Tradiconal

/*
const letraNoNome = (nome) => {
    return nome.length; //length retorna o tamanho o comprimento em números do meu objeto ou array
}
console.log(letraNoNome('Wilhams'));//7
*/

//Modo Simplificado sem as chaves

//const letraNoNome = (nome) => nome.length; //length retorna o tamanho o comprimento em números do meu objeto ou array
//console.log(letraNoNome('Wilhams'));//7

//Modo mais simplificado sem os parenteses

/*
const letraNoNome = nome => nome.length; //length retorna o tamanho o comprimento em números do meu objeto ou array
                                        //isso só deu certo pq tenho só um parãmetro, se fosse dois teria q colocar os (), e se não tiver nehmum parâmetro os parenteses é obrigatório
console.log(letraNoNome('Wilhams'));//7
*/

//OBSERVAÇÃO: Arrow functions não aceita o this pra se referenciar á um objeto, quando usar o this use a function normal