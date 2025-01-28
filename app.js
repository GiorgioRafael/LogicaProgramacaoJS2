let listaDeNumerosSorteados = []
let numeroSecreto = gerarNumero();
console.log(numeroSecreto);
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;  
};
let numeroLimite = 10
let tentativas = 0;
function inicioJogo(){
    exibirTexto('h1', 'Jogo do numero secreto')
    exibirTexto('p','Escolha o numero entre 1 e 10')
    tentativas = 0;
}
inicioJogo()


function verificarChute() {
    let chute = parseFloat(document.querySelector('input').value);
    if (chute == numeroSecreto){
        tentativas++
        exibirTexto('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!` ;
        exibirTexto('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numeroSecreto){
        tentativas++
        exibirTexto('p',`O numero menor do que ${chute}`);
        limparCampo();

    }else{
        tentativas++
        exibirTexto('p',`O numero maior do que ${chute}`);
        limparCampo();

    }

};

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let tamanhoLista = listaDeNumerosSorteados.length

    if (tamanhoLista == numeroLimite){
        listaDeNumerosSorteados = []; //limpa a lista
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados, numeroEscolhido)
        return numeroEscolhido;
    }
};

function getDataFromHTML() {

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    inicioJogo()
    numeroSecreto = gerarNumero();
    limparCampo()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}