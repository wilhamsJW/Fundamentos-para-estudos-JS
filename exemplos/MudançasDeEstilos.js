//veja este script com o html Mudançasdeestilos.html nessa mesma pasta

//classList acessa várias açoes, o próprio VsCode mostra isso, vc pode adiconar algo com classList, pode remover algo
//pode substituir algo, vamos adiconar algo com add


//com essas combinações abaixo dá pra fazer muita coisa em projetos reais, principalmente com a função mostrarTelefone
//dá pra mostrar um site com aquela função, mostrar uma página, o que sua imaginação quiser


function azul () {
   limpar();
   document.getElementById("titulo").classList.add('azul');
 
}

function vermelho () {
    limpar();
    document.getElementById("titulo").classList.add('vermelho');

}

function verde () {
    limpar();
    document.getElementById("titulo").classList.add('verde');

}

//Ao apertar os botôes vc conseguirá mudar a cor dos background, mas se apertar novamente não mudará, só muda uma vez
//pq? pq se vc olhar no inspection do browser, verá q ele add todas as classe ao elemeto, então temos que fazer com que
//ao adicionar uma classe ele remova a outra, para que fique todos os botôes funcionando normalmente 

//A função irá remover a class existente dentro da id titulo ou do h1 do html, 
//dessa forma ficará algo dinãmico muito legal

 function limpar () {
     document.getElementById('titulo').classList.remove('azul');
     document.getElementById('titulo').classList.remove('vermelho');
     document.getElementById('titulo').classList.remove('verde');
 }

//essa função faz com o que ao o usuário apertar um botão apareça o email, lembre-se que no css a id email está none
//ou está oculta, e aqui alteramos ela pra block, assim ao clickar no botão irá aparecer

 function mostrarTelefone(e) {  //o e representa a id do botão, ou o botão em si, pq? pq lá no html passei um parâmetro
                               //chamado this, quando this, me referencio á ele mesmo, this é o próprio botão, evitando
                              //o document.get...

    e.style.display = "none"; // ação criada pra esconder o botão após clickado, 
    document.getElementById('email').style.display = "block";//esta ação irá fazer aparecer o e-mail

 } 