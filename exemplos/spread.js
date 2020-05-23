//O Operador spread é representado por retiçências ou os tres pontinhos assim -> ...
//com ele conseguimos colocar um array inteiro dentro de outro array, também usamsos em objetos
//ex.:

/*
let numeros = [1,2,3,4];

let outros = [...numeros,5,6,7,8]; //colocamos o array numeros dentro do array outros

console.log(outros); //[1, 2, 3, 4, 5, 6, 7, 8]
*/




//Usando spread em Objetos




/*
let info = {nome:'Wilhams',
           sobrenome:'Meira',
           idade: 23,
}

let novaInfo = {
    ...info, cidade:'curitiba', estado:'paraná', país:'Brasil',
}

console.log(novaInfo); //{nome: "Wilhams", sobrenome: "Meira", idade: 23, cidade: "curitiba", estado: "paraná", …}
*/




//Adicionando um objeto dentro de uma função com spread e criando um novo objeto com mais informações


/*
let info = {nome:'Wilhams',
           sobrenome:'Meira',
           idade: 23,
        }

function adicionarInfo () {
    let novaInfo = {
        ...info,
        status:'On-line',
        cadastro:'jsdnjjsdnfv',
        id:'999999',
    };

    return novaInfo;
}

console.log(adicionarInfo());
*/








//Operador rest
//o que fazer se temos vários parãmetros pra receber? Digamos que o usuário tá enviando vários parãmetros, o q fazer?
//usamos o operador rest, ele também é representado por três pontinhos, qunado passo os três pontinhos e o nome do
//parâmetro o JS já entende que se trata de um rest e aceitará vários parâmetros

/*
function adicionar(...numeros) {
    console.log(numeros);
}

adicionar(1,2,3,4,5,6,7,8,9,); //(9) [1, 2, 3, 4, 5, 6, 7, 8, 9] recebi 9 arrays cada um contendo um número dentro
*/



//Juntando o spread com o rest
//Function feita pra add mais nomes á array chamada nomes



function adicionar(nomes, ...novoNomes) { //aqui usamos o operador rest pra conseguir dá vários parãmetros ao parâmetros novoNomes
        
    let novoConjunto = [
        ...nomes,        //aqui usamos o operador spread pra adicionar uma nova array dentro de outra array
        ...novoNomes    //operador spread também
    ];

    return novoConjunto; //lembre-se de sempre retornar o que foi criado, se não, não vai aparecer no console
}

let nomes = ['wilhams', 'Meira']; //lista atual
let outros = adicionar(nomes, 'paulo', 'rodolfo', 'douglas');  //lista pra ser adicionada na lista atual
                                                              //adicionar(nomes, 'paulo', 'rodolfo', 'douglas'); este parâmetros é exatamente
                                                             //os parâmetros da função, note q a função usa o opreador rest, por isso conseguir add 3 nomes

console.log(outros); // (5) ["wilhams", "Meira", "paulo", "rodolfo", "douglas"]