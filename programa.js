// executar esse codigo no https://www.jdoodle.com/execute-nodejs-online/
const recursosDisponiveis = [5,6,9,7,8];
const matrizAlocacaoCorrente = [[0,1,2,2,1], [2,3,2,1,0], [1,0,0,2,0], [2,1,3,1,0], [0,0,0,3,1]];
const matrizRequisicaoDeAlocacao = [[10,2,3,2,1], [1,1,3,4,1], [3,4,2,5,1], [1,10,0,0,0], [5,4,2,4,1]];

var matrizApoio = []
var indexApoio
var flag = 0

function banqueiro(recursos, cliente) {
    while(flag < 6) {
        for (var k = 0; k < 5; k++) {
            cliente.forEach((vetorRequisitante, index) => vetorRequisitante[k] > recursos[k] ? matrizApoio.push(`${true}`, index) : matrizApoio.push(`${false}`, index))
            if(matrizApoio.includes('true')) {
                // quer dizer que tem recursos faltando para algum processo...
                console.log('algum processo nao pode completar seus requisitos neste momento...', matrizApoio)
            } else {
                for(var m = 0; m < 5; m++) {
                    recursos[m] += cliente[k][m]
                }
            }
            // console.log('matrizApoio: ', matrizApoio ,'indexApoio: ', indexApoio)
            matrizApoio = []
            indexApoio = -1
        }
        flag++
    }
        console.log('tudo certo, todos os processos tiveram seus requisitos cumpridos.')
        console.log(recursosDisponiveis)
}

banqueiro(recursosDisponiveis, matrizRequisicaoDeAlocacao)
