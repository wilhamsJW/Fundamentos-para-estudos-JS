//alert("ok");


//criando uma função pra mostrar que o formulário foi enviado
//essa função vai ficar dentro de onclick no botão da página html

function clickou () {
    alert("Email enviado com sucesso");
}

//clickou(); um função como essa não pode ser chamada no escopo do arquivo, pq se não ele carregará a msg assim q carregar a página
//a msg só deve aparecer quando o usuário clikar no botão
//podemos colocar javascript direto na tags html tbm mas não é uma boa prática

function mudarTema () {

    document.getElementById("tema").innerHTML = "Tema mudado dinamicamente após o click";
    
}