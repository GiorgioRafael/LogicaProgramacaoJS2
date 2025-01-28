//1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros,
// e peso, em quilogramas, que serão recebidos como parâmetro.
function calcImc(peso,altura){
    let imc = (peso) / (altura ** 2);
    return imc;
}

//2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcFatorial(numero){
    if(numero == 0 || numero == 1){
        return 1;
    };

    let fatorial = 1;
    for(let n = numero; n > 1; n--){
        fatorial *= n;
    };
    return fatorial;
}
//3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function calcConverterDolar(dolar){
    let valorDolar = 4.80;
    let valorConvertido = dolar * valorDolar;
    return valorConvertido
}

//4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaPerimetro(altura,largura){
    let area = altura*largura;
    let perimetro = (altura*2)+(largura*2);
    let retorno = [area, perimetro]
    console.log(`area: ${area}, perimetro: ${perimetro}`)
    return retorno;
}

//5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que 
// será fornecido como parâmetro. Considere Pi = 3,14.
function calcularSalaCircular(raio){
    let pi = 3.14;
    let area = (pi) * (raio ** 2);
    let perimetro = 2 * pi * raio;

    return [area, perimetro]
}


//6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuadaDoNum(numero){
    for(let i =1; i <=10; i++){
        console.log(`${numero} X ${i} = `+ numero*i)
    }
}