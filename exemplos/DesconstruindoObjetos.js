//Desconstrução ou desistruturação de objetos

let pessoa = {
    nome: 'Wilhams',
    sobrenome:'Meira',
    //idade: 23, //apagado pra mostrar um exemplo de alterar valor pra padrão 0
    redeSocial:{
        faceBook: 'wilhamsFace', Instagram:{ url:'@wilhams', seguidores: 1200, }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

//console.log(pessoa.redeSocial.Instagram); //@wilhams //se quiser pegar apenas o instagram é só colocar .instagram
//console.log(pessoa.nomeCompleto()); //Wilhams Meira





//Vamos Começar o proceso de Descontrução ou Desistruturação
//crie uma let e passe as propriedades do objeto que vc quer pra sua let

/*
let idade     = pessoa.idade;
let nome      = pessoa.nome;
let sobrenome = pessoa.sobrenome;

console.log(idade, nome, sobrenome) //23 "Wilhams" "Meira"
*/


//essa foi uma forma de desconstrução, mas como fazer isso de uma forma mais inteligente?
//segue código


/*
let { nome:PessoaNome, sobrenome, idade=22,  } = pessoa;  //aqui dentro eu coloco as propriedade que eu quero pegar do objeto pessoa
                                         //ao invés de fazer várias linhas de código pra pegar essas propriedades
                                        //só fazemos uma dessa forma.Eles se transformaram em var independente
                                       //nome:PessoaNome = serve apenas pra mudar o nome da var, note q tive q chamar ela no console pelo novo nome

console.log(PessoaNome, sobrenome, idade );//Wilhams Meira 23                                       

*/






//vamos supor que o objeto pessoa veio sem idade, eu posso colocar um valor padrão em idade q seria = 0, ou poderia colocar qq idade q eu queria
//qq número q vc alterar, quando  o objeto pessoa alterar o valor pra idade ral automaticamente o valor padrão inserido será muddo para o original
//como no exemplo acima 





//como pegar Instagram ou Facebook, ou os dois juntos?

/*
let {faceBook, Instagram} = pessoa.redeSocial;
console.log(faceBook, Instagram); //wilhamsFace @wilhams
*/





//como pegar varias propriedades e acessar um objeto com propriedade dentro

/*
let {nome, sobrenome, redeSocial:{Instagram}} = pessoa;
//console.log(nome, sobrenome, redeSocial);// Uncaught SyntaxError: Identifier 'sobrenome' has already been declared
console.log(nome, sobrenome, Instagram);//
*/






//Acessando o objeto pessoa + o objeto redeSocial dentro de pessoa + o objeto instagram dentro de redeSocial

let {nome, sobrenome, redeSocial:{Instagram:{url:Instagram, seguidores}}} = pessoa;   //redeSocial:{Instagram:{url:Instagram}} = renomeamos a propriedade url para instgram, é como que tivessemos q chamar o objeto ali dentro da propriedade para ele entender do que se trata
//dessa forma descontruir um objeto e formei em várias variáveis, posso acessálas independemente

//console.log(nome, sobrenome, Instagram, seguidores); //Wilhams Meira @wilhams 1200


/*
function pegarNomeCompleto (Obj) {

    //return Obj.nome + ' ' + Obj.sobrenome; //forma mais simples
 
    //pode ser assim também, depende do que vc quer
    //let nome = Obj.nome;
    //let sobrenome = Obj.sobrenome;
    //return `${nome} ${sobrenome}`;

}

pegarNomeCompleto(pessoa); //chamei a função
console.log(pegarNomeCompleto(pessoa)); //note q tem q passar o parãmetro pessoa dentro q é o objeto
*/

//forma mais inteligente de se fazer isso

function pegarNomeCompleto( {nome, sobrenome, redeSocial:{Instagram:{url:Instagram}}} ) { //passando o parâmetro dentro da função que vc quer descontruir o objeto
    return `${nome} ${sobrenome} (Siga em ${Instagram})`;               //assim está descontruindo o objeto dentro da função, sem criar variável
}                                                                      //redeSocial:{Instagram:{url:Instagram}} = renomeamos a propriedade url para instgram, é como que tivessemos q chamar o objeto ali dentro da propriedade para ele entender do que se trata

console.log(pegarNomeCompleto(pessoa));