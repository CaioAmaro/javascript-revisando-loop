/* Você está criando um aplicativo para exibir a sequência de números até um valor que o usuário forneceu. 
O objetivo é mostrar todos os números a partir de 1 até o valor informado pelo usuário, de forma ordenada e crescente.

Como você pode gerar essa contagem e garantir que cada número seja mostrado até atingir o valor final fornecido?

Exemplo de entrada:
const numeroFinal = 5;

Saída esperada:
1
2
3
4
5 */

const readline = require('readline')
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite um número \n>', (numeroFinal) => {
    for(let i = 1; i <= numeroFinal; i++){
        console.log(i)
    }

    leitor.close()
})