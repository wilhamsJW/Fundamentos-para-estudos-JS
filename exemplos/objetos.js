//alert('oii')

//um objeto começa chaves{} e um array começa com colchtes []
//objetos são difernetes de array, objetos tem porpriedades, objetos não são numnerados de 0 á 1 e sim
//nomeados, eu especifico um nome especifico pra a propriedade que eu queira armazenar
//ex.:

let usuário = {
    nome: 'Wilhams',
    idade: '23',
    cadastro: '55555',
    logado: false,

    login: function() {

        this.logado = true;
        console.log("O nome do usuário é"+ " " + this.nome) //o this se referencia ao próprio objeto, no caso usuário
        //console.log("Login feito");
    },

    acessar: function() {

        if(this.logado == true) {
        console.log("Usuário logado com sucesso")
        } else {
            console.log( "O usuário" + " " + this.nome + " " + "não está logado")
        }
    }
}


//console.log(usuário['nome']); //acessando a propriedade nome do objeto usuário

//console.log(usuário.nome); //outra forma mais comun de acessar a propriedade, acessar por ponto é a maneira mais comun
//de acessar um objeto, quando utilizamos ponto estamos acessando um objeto
//Quando dizemos document.getelementById, este ponto representa que estou acessando um objeto, tudo em JS é opbjeto

console.log("Cadastro:" + usuário.cadastro )

//usuário.login(); //estou chamando o objeto usuário com a função login, irá mostrar -> O nome do usuário é Wilhams
//comente este código acima e a função cairá no else, mostrando q o usuário não está logado

usuário.acessar();


/**
 * Exemplos de array com vários objetos dentro, algo usado pra armazenar
 * vários valores ou propriedades do mesmo objeto.
 * Observe o exemplo abaixo:
 */

 let loja = [
     {sapatos: "social, esporitvo, passeio", numeros: "39, 40, 41"},
     {camisas: "regata, social", tamanho: "M, P, G"},
     {jeans:   "calça, bermuda", tamanho: "G, GG ,M"},
 ];

 console.log(loja[1]); //acessando camisas no console, o primeiro número dentro do [] dá acesso ao objeto camisa

 //console.log(loja[1].tamanho); //dessa forma eu acesso apenas os tamanhos 
 console.log(loja[1]['tamanho']); //pode acessar da forma acima ou dessa forma, o recomendado é sempre o ex. acima