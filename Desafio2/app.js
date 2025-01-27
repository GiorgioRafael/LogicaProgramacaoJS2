/*

1.Criar uma função que exibe "Olá, mundo!" no console.

2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

4.Criar uma função que recebe três números como parâmetros e retorna a média deles.

5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
*/

function exibirOlaMundo(){
    console.log('Ola Mundo!')
};

let nome = "Rafael";
function exibirSaudacao(nome){
    console.log(`Ola ${nome}`)
};

function duplicarNumero(numero){
    return numero*2;
};

function mediaTresNumeros(num1,num2,num3){
    return ((num1+num2+num3)/3)

};

function encontrarMaiorNumero(num1,num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }

};

function calcularQuadrado(num) {
    return num*num;
};
