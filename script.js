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
    alert('ERROU!');
    jogo();
 } else {
    numeroAcertos++;
    inputResultado.value = '';
    jogo();
    // alert('acertou!');
 }
}

botaoEnviar.addEventListener('click', tentarResposta);






// alert(resultado)

// alert(primeiroMultiplicador.innerHTML);