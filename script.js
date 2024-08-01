const primeiroMultiplicador = document.querySelector('#primeiroMultiplicador');
const segundoMultiplicador = document.querySelector('#segundoMultiplicador');
const inputResultado = document.querySelector('#inputResultado');
const botaoEnviar = document.querySelector('#enviar');
const acertos = document.querySelector('#acertos');
let resultado;
let numeroAcertos = 0;

function jogo(){
acertos.innerHTML = 'Acertos: ' + numeroAcertos;
primeiroMultiplicador.innerHTML = Math.floor(Math.random() * 10);
segundoMultiplicador.innerHTML = Math.floor(Math.random() * 10);
resultado = parseInt(primeiroMultiplicador.innerHTML) * 
parseInt(segundoMultiplicador.innerHTML);
}

jogo();
function tentarResposta(){
    // alert(inputResultado.value)
 if(parseInt(inputResultado.value) != resultado) {
    numeroAcertos = 0;
    inputResultado.value = '';
    alert(`ERROU! A resposta é: ${resultado}`);
    jogo();
   //  inputResultado.focus();
 } else {
    numeroAcertos++;
    inputResultado.value = '';
    jogo();
   //  inputResultado.focus();
    // alert('acertou!');
 }
}

// element.focus();
//     element.onblur= function() {
//         setTimeout(function() {
//             element.focus();
//         }, 0);
//     };

botaoEnviar.addEventListener('click', tentarResposta);






// alert(resultado)

// alert(primeiroMultiplicador.innerHTML);