//o Switch é usado pra quando temos várias condiçoes para o mesmo parãmetro


let dia = 7;
let diaNoite = '';

switch(dia) {
    case 1:
        diaNome = 'Segunda_Feira';
        break; //o break é colocado para que o comando pare de executar, se não tiver o break e o código executado era o 2 ele não executa como 2, ele passa para o 3
               //o break siginifica que depois da execução do código não irá mais executar outro código sem necessidade
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sábado';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
    default:
        Error;    

}

document.getElementById('dia').innerHTML = "Hoe é dia" + " " + diaNome;


//este exemplo abaixo só será mostrado no console, troque o valor da var Animal e veja como o console se comporta

var Animal = '';
switch (Animal) {
    case 'Vaca':
    case 'Girafa':
    case 'Cachorro':
    case 'Porco':
        alert('Esse animal irá para Arca de Noé');
        break;
    case 'Dinossauro': //os case q ficaram depois de break não foram executados
    case 'crocodilo':    
    default:
        alert('Esse animal não vai.');
}

