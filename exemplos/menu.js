//função criada para fazer com que o botão do browser abra e fecha o menu
//class nave, é uma class do css responsável por esconder o menu, com uma propriedade chamada -> display: none;

/*
function showmenu() {
   
    let menu = document.getElementById("menu-area");
     
    if(menu.classList.contains('nave') == true) {

        menu.classList.remove('nave');

    } else {
        menu.classList.add('nave');
    }
     
}
*/
//outra forma de fazer, com esse código, fizemos tudo pelo JS e não precisamos de uma class á mais no css

function showmenu () {

    let menu = document.getElementById("menu-area");
    if(menu.style.width == '200px') {
        menu.style.width = '0px';
    } else {
        menu.style.width = '200px';
    }
}


