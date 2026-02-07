import { ContaController } from './src/controller/ContaController';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { colors } from './src/util/Colors';
import { formatarMoeda } from './src/util/Currency';
import { Input } from "./src/util/Input";

// Cria um Objeto Global da Classe ContaController
const contas = new ContaController();

// Cria um array contendo os tipos de conta
const tipoContas = ["Conta Corrente", "Conta Poupanca"];

export function main() {

    let opcao: number;

    // Cria contas de teste para validar a aplicação
    criarContasTeste();

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada:");
        // CORREÇÃO: Adicionado segundo argumento
        opcao = Input.questionInt("", { defaultInput: 0 });

        if (opcao === 0) {
            console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
                criarConta();
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
                listarTodasContas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                buscarContaPorNumero();
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);
                atualizarConta();
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);
                deletarContaPorNumero();
                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);
                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
                keyPress()
        }
    }
}

function criarConta(){
    console.log("Digite o número da Agência: ")
    const agencia = Input.questionInt("", { defaultInput: 0 });

    console.log("Digite o nome do Titular: ")
    const titular = Input.question("", { defaultInput: "" });

    console.log("Selecione o tipo da Conta: ")
    const tipo = Input.keyInSelect(tipoContas, "", { cancel: false}) + 1;

    console.log("Digite o saldo da Conta: ")
    const saldo = Input.questionFloat("", { defaultInput: 0 });

    switch(tipo){
        case 1: 
            console.log("Digite o limite da conta: ");
            const limite = Input.questionFloat("", { defaultInput: 0 });
            contas.cadastrar(new ContaCorrente(
                contas.gerarNumero(), agencia, titular, tipo, saldo, limite));
        break;

        case 2: 
            console.log("Digite o dia do aniversário da conta: ");
            const aniversario = Input.questionInt("", { defaultInput: 0 });
            contas.cadastrar(new ContaPoupanca(
                contas.gerarNumero(), agencia, titular, tipo, saldo, aniversario));
        break;
    }
}

function listarTodasContas(): void{
    contas.listarTodas();
}

function buscarContaPorNumero(): void{
    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("", { defaultInput: 0 });
    contas.procurarPorNumero(numero);
}

function atualizarConta(): void{
    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("", { defaultInput: 0 });

    const conta = contas.buscarNoArray(numero);

    if (conta !== null && conta !== undefined) {
        let agencia: number = conta.agencia;
        let titular: string = conta.titular;
        const tipo: number = conta.tipo;
        let saldo: number = conta.saldo;

        console.log(`\nAgência atual: ${agencia}`);
        console.log("Digite o novo número da agência: ");
        agencia = Input.questionInt("", { defaultInput: agencia });

        console.log(`\nTitular atual: ${titular}`);
        console.log("Digite o novo nome do titular: ");
        titular = Input.question("", { defaultInput: titular });

        console.log(`\nSaldo atual: ${formatarMoeda(saldo)}`);
        console.log("Digite o valor do novo saldo: ");
        saldo = Input.questionFloat("", { defaultInput: saldo });

        switch(tipo){
            case 1: 
                let limite: number = (conta as ContaCorrente).limite;
                console.log(`\nLimite atual: ${formatarMoeda(limite)}`);
                console.log("Digite o valor do novo limite: ");
                limite = Input.questionFloat("", { defaultInput: limite });
                contas.atualizar(new ContaCorrente(numero, agencia, titular, tipo, saldo, limite));
            break;

            case 2: 
                let aniversario: number = (conta as ContaPoupanca).aniversario;
                console.log(`\nAniversário Atual: ${aniversario}`);
                console.log("Digite o novo dia do aniversário: ");
                aniversario = Input.questionInt("", { defaultInput: aniversario });
                contas.atualizar(new ContaPoupanca(numero, agencia, titular, tipo, saldo, aniversario));
            break;
        }
    } else {
        console.log(colors.fg.red, `A conta número ${numero} não foi encontrada!`, colors.reset);
    }
}

function deletarContaPorNumero(): void{
    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("", { defaultInput: 0 });
    
    const conta = contas.buscarNoArray(numero);

    if(conta !== null && conta !== undefined){
        console.log(colors.fg.whitestrong, 
            `\nTem certeza que deseja deletar a conta número ${numero} [y/n]?`, colors.reset);
        const confirma = Input.keyInYNStrict("");

        if (confirma)
            contas.deletar(numero);
        else
            console.log(colors.fg.red,"\nOperação cancelada!", colors.reset);
    } else {
        console.log(colors.fg.red, `A conta número ${numero} não foi encontrada!`, colors.reset);
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Bianca Caetano - bianca@email.com");
    console.log("github.com/bia024");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset,"\nPressione enter para continuar...");
    Input.prompt();
}

function criarContasTeste(): void{
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 'Amanda Magro', 1, 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 'João da Silva', 1,  1000.00, 100.00));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));
}

main();