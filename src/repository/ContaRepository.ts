import { Conta } from "../model/Conta";

export interface ContaRepository{
    
    // Iniciaremos com os Métodos do CRUD (Create, Read, Update, Delete)
    procurarPorNumero(numero: number): void // Método de Consumo
    listarTodas(): void;
    cadastrar(conta: Conta): void;// Para fazer um cadastro, preciso criar um objeto. Esse Método tem uma peculiaridade
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    // Passo 2: Definir os Métodos Bancários 
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor:number): void;

}