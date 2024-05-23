import readCSV from "../model/readCSV";
import writeCSV from "../model/writeCSV";
import { Data } from "../model/readCSV";
import fs from 'fs';

const filePath = './model/estoque.csv'

class estoqueService
    {async function criar({ data }: { data: Data; }): Promise<void> {
    {
        if(typeof data.nome !== 'string' || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade))
        {
            throw new Error('Dados Inválidos para o Produto');
        }
        else
        {
            await writeCSV (filePath, [data]);
        }

    }
}}
