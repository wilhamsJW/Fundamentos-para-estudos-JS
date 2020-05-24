
//primeiro fazemos o fetch, o fetch gera uma promessa pq ele é uma requisição, como se trata
//de uma requisição eu preciso esperar o tempo de resposta do servidor pra me trazer a resposta
//então passamos a receber uma promessa, pra receber essa promessa usamos o .then

/*
fetch('https://alunos.b7web.com.br/api/ping')   //se vc olhar no console na aba network verá q a requisição foi feita
                                               //no ping vc verá isso

.then((r) => r.json())//o .then vai receber a resposta e eu vou transformar essa resposta em json, qunado digo r.json
                     //estou transformando a resposta em formato json e isso vai gerar outra promise então precisaremos
                    //de outro .then, esse outro .then recebe o json e executa uma ação, no caso esse json estaria recebendo todos os dados da url enviada
.then((json) =>{

    console.log(json);

});
*/
/*
const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method:'POST',
    body:JSON.stringify({ //JSON.stringify = trasnforma de objeto pra string
        nome:'Wilhams',
        idade:'23'
    })
};

fetch(url, params)
 .then((r) => r.json())
 .then((json) =>{

    console.log(json); //vc verá esse dado em network -> ping -> lá em baixo procure por request payload e verá 
                       //esses dados   nome:'Wilhams',
                                             //idade:'23',
});

*/



//Async Await

function requisitar() {

const url = "https://alunos.b7web.com.br/api/ping";
const params = {
    method:'POST',
    body:JSON.stringify({ //JSON.stringify = trasnforma de objeto pra string
        nome:'Wilhams',
        idade:'23'
    })
};

fetch(url, params)
 .then((r) => r.json())
 .then((json) =>{

    console.log(json); //vc verá esse dado em network -> ping -> lá em baixo procure por request payload e verá 
                       //esses dados   nome:'Wilhams',
                                             //idade:'23',
});

console.log('alguma coisa')

}

 async function requisitar2() {

    const url = "https://alunos.b7web.com.br/api/ping";
    const params = {
    method:'POST',
    body:JSON.stringify({ //JSON.stringify = trasnforma de objeto pra string
        nome:'Wilhams',
        idade:'23'
    })
   };
   
   const r = await fetch(url, params);  //await = faz com que o código do fetch só seja executado quando receba a respsta ou os dados enviados 
   const json = await r.json();        //basicamente isso q a função async ou assícrona faz, ela faz com que o código só seja executado depois q recebe a resposta
   console.log(json);

   console.log('Verificação');
}



requisitar(); 