import receber from 'prompt-sync';
import { adicionarProduto } from "./controller/controleEstoque";
import { Data } from "./model/readCSV";

var entrada = receber ('Digite a ação desejada:');
var W = parseInt(entrada, 10);

    switch (W) {
        case 1:
            var X = receber('Digite o nome do produto:');
            var Y = receber('Digite o peso do produto:'); 
            var Z = receber('Digite o valor do produto:'); 
            var Q = receber('Digite a quantidade do produto:'); 
            
            const dados = {
                nome: X,
                peso: parseFloat(Y),
                valor: parseFloat(Z),
                quantidade: parseInt(Q,10)
            } as Data

            await adicionarProduto(dados);
            break;
    }