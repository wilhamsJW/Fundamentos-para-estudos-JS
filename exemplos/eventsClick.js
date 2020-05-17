//alert("ok");


//criando uma função pra mostrar que o formulário foi enviado
//essa função vai ficar dentro de onclick no botão da página html

function clickou () {
    alert("Email enviado com sucesso");
}

//clickou(); um função como essa não pode ser chamada no escopo do arquivo, pq se não ele carregará a msg assim q carregar a página
//a msg só deve aparecer quando o usuário clikar no botão
//podemos colocar javascript direto na tags html 





//Com essa função não é preciso chamar a função dentro da tag button no hmtl, pois o click está sendo requisitado
//via JS.

 /*
function mudarTema () {
    document.getElementById('trocar').addEventListener('click', e =>{
        document.getElementById("tema").innerHTML = "Contéudo alterado pelo click";
    })
}

window.mudarTema(); //ou mudarTema(); //ambas invocam a função
*/





//com essa função é preciso chamar a função dentro do botão no html, ex: <button onclick="mudarLogo();" ></button?

/*
function mudarLogo () {
  
     document.getElementById("tema").innerHTML = "Tema alterado com sucesso";
    
  }
  */





//onmouseover pode ser feito via JS ou direto na tag HTML, onmouseover é ação do usuário passar o mouse no local 
//desejado.
//ex.:  <h1 onmouseover="alert('vc passou o mouse')" id="titulo">Wilhams Meira Júnior</h1>

//onmouseout é quando o usuário tira o mouse



