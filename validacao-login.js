/* Você está desenvolvendo o sistema de login de um app interno da empresa. 
O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes. 
Se digitar certo, exibe uma mensagem de acesso permitido. Se errar 3 vezes, bloqueia o acesso.

Seu desafio é escolher o laço de repetição mais adequado para resolver este problema.

Exemplo de entrada:
const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";

Saída esperada:
Tentativa 1 inválida.
Tentativa 2 inválida.
Acesso permitido!

Caso atinja o número total de tentativas:
Acesso bloqueado. Número máximo de tentativas atingido.

E aí? Como você resolveria esse problema? 
Qual tipo de laço de repetição você usaria validar o login? 
Justifique sua escolha e faça o código de resolução, explicando os motivos de usar o laço escolhido no contexto desse problema.
 */

const tentativas = ["1234", "", "secreto", 'sec', 'segredo'];
const senhaCorreta = 'segredo'
let erros = 0

for (tentativa of tentativas) {

    if (erros >= 3) {
        console.log('Conta bloqueada.')
    } else {
        if (tentativa !== senhaCorreta) {
            erros++;
            console.log('Tentativa ', erros, ' inválida.')
        } else {
            console.log('Acesso permitido!')
            break
        }
    }


}