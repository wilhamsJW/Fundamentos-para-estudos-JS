alert('oii')

//objetos são difernetes de array, objetos tem porpriedades, objetos não são numnerados de 0 á 1 e sim
//nomeados, eu especifico um nome especifico pra a propriedade que eu queira armazenar
//ex.:

let usuário = {
    nome: 'Wilhams',
    idade: '23',
    cadastro: '55555',
    login: function() {
        //console.log("Login feito");
    }
}

//usuário.login(); //login feito. //acessando o objeto e chamando a função dentro dele

//console.log(usuário['nome']); //acessando a propriedade nome de usuário

console.log(usuário.nome); //outra forma mais comun de acessar a propriedade, acessar por ponto é a maneira mais comun
//de acessar um objeto, quando utilizamos ponto estamos acessando um objeto

//Quando dizemos document.getelementById, este ponto representa que estou acessando um objeto, tudo em JS é opbjeto


