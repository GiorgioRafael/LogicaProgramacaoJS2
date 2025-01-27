/*

1. Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

*/


titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do desafio'

function botaoConsole(){
    console.log('O Botao foi clicado')
}

function botaoAlerta(){
    alert('Eu amo JS')
}

function botaoPrompt(){
    let cidade = prompt('Digite uma cidada do Brasil')
    
    alert(`Estive em ${cidade} e lembrei de você`)
}

function botaoSoma(){
//o desafio era mais simples mas eu quis incrementar um pouco mais
    let num1 = parseFloat(prompt('Digite o primeiro numero')) //parseFloat transforma o valor recebido em float
    console.log(num1)
    let num2 = parseFloat(prompt('Digite o segundo numero'))
    console.log(num2)
    if(isNaN(num1) || isNaN(num2) ){ //isNaN verifica se o valor está preenchido, se o usuario colocar alguma palavra/letra ou deixar o prompt vazio o valor atribuido é NaN
    alert(`Digites somente numeros!`)
    }else
    alert(`A soma dos dois numeros é igual à ${num1 + num2} `) //faz a somad os valores na propria string para economizar espaço
    console.log(num1+num2)
}

//possiveis alterações que eu pessoalmente faria:
// fazer o if else com render ternario (economizaria linhas e memoria)