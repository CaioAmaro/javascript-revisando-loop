/* Você está desenvolvendo uma funcionalidade para um aplicativo de finanças pessoais. 
Um dos recursos permite simular quanto uma pessoa economizaria em um período de tempo, 
iniciando em R$1 no primeiro dia e aumentando esse valor em R$1 a cada novo dia. 
Ou seja, a cada dia que passa, ela economiza R$1 a mais do que no anterior.

Por exemplo, em 10 dias ela economizaria:
    Dia 1: R$1
    Dia 2: R$3
    Dia 3: R$6
    ...
    Dia 10: R$55

Crie um programa que calcule o total economizado ao final de 10 dias.

Exemplo de entrada:
const totalDias = 10;

Saída esperada:
Total economizado: R$55
 */

let economizado = 0
const totalDias = 10

for(let i = 1; i <= totalDias; i++){
    economizado += i
    console.log('Dia ',i, ' R$',economizado)
}

