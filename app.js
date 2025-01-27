//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha o numero entre 1 e 10';
let numeroSecreto = gerarNumero();
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;  
};
exibirTexto('h1', 'Jogo do numero secret')
exibirTexto('p','Escolha o numero entre 1 e 10')


function verificarChute() {
    let chute = parseFloat(document.querySelector('input').value);
    console.log('chute: '+ chute);
    console.log('numero secreto ' + numeroSecreto);

};

function gerarNumero(){
    return parseInt(Math.random() * 10 +1);
    
};

function getDataFromHTML() {

}