import leia from "readline-sync";
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { Input } from "./src/util/Input";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from './src/model/ContaPoupanca';
export function main() {

    let opcao: number;
    
    // const c1 = new Conta (1, 1234, "Sofia", 1, 100000.00);

    // c1.visualizar();
    
    // console.log("Sacar 100,00: ", c1.sacar(100.00));
    // console.log("Sacar 200000,00: ", c1.sacar(200000.00));
    // console.log("Sacar 0,00: ", c1.sacar(0.00));

    // console.log("Depositar -10,00: ");
    // c1.depositar(-10.00);

    // console.log("Depositar 500,00: ");
    // c1.depositar(500.00);

    // // estamos simulando um sistema administrado por um Gerente. Não estou me atendo a todos os sistemas bancários.
    // c1.visualizar();


    // Testes da Classe Conta Corrente
    // aqui peenchemos todos os dados
    const cc1 = new ContaCorrente(1, 5678, "Bianca", 1, 200000.00, 2000.00);

    cc1.visualizar();

    const cp1 = new ContaPoupanca(2, 1234, "Beatriz", 2, 2000.00, 12);

    // Testes do Método Sacar - Conta Corrente
    console.log("Sacar 100,00: ", cc1.sacar(1000.00));
    console.log("Sacar 200000,00: ", cc1.sacar(200000.00));
    console.log("Sacar R$50000.00", cp1.sacar(500.00));
    // Testes do Método Depositar - Conta Corrente
    cc1.depositar(500);

    cp1.visualizar();

    // OUTRAS FORMAS DE VISUALIZAR...:
    // cc1.agencia = 1234; // exemplo mostrado pelo professor <-
    // c1.visualizar();
    // console.log(cc1.agencia);

    // Faremos o diagrama de aniversário (atributo number)

    // criar uma classe investimento de acordo com o invest da pessoa, conta salario, conta INSS (nao tem opção de deposito , por ser conta temporaria . e ai ela transfere rpa corrente pra poder movimentar)
    console.log("\nTestes - Classe Conta Poupança");

    console.log("\nSacar 1000.00");
    console.log("\n", cp1.sacar(1000.00));

    console.log("\nSacar 2100.00");
    console.log("\n", cp1.sacar(2100.00));

    console.log("\nDepositar 500.00");
    cp1.depositar(500.00);

    console.log("\n");

    const menu = `
${"*".repeat(50)}
${" ".repeat(50)}
                BANCO DO BRAZIL COM Z                            
${" ".repeat(50)}
${"*".repeat(50)}
${" ".repeat(50)}
                1 - Criar Conta                                      
                2 - Listar todas as Contas                           
                3 - Buscar Conta por Numero                          
                4 - Atualizar Dados da Conta                         
                5 - Apagar Conta                                     
                6 - Sacar                                            
                7 - Depositar                                        
                8 - Transferir valores entre Contas                  
                9 - Sair                                             
${" ".repeat(50)}
${"*".repeat(50)}
`;

    do {
        console.log(colors.bg.black, colors.fg.yellow);
        console.log(menu);
        console.log(colors.reset);

        opcao = leia.questionInt("Entre com a opcao desejada: ");

        // opcao = leia.questionInt(colors.fg.matrixGreenStrong + "Entre com a opcao desejada: ");
        
        if (opcao === 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\nCriar Conta\n", colors.reset);

                console.log("Digite um texto com acentos: ");
                let teste = Input.question("");
                console.log(teste);

                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\nListar todas as Contas\n", colors.reset);
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nConsultar dados da Conta por Número\n", colors.reset);
                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nAtualizar dados da Conta\n", colors.reset);
                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\nApagar uma Conta\n", colors.reset);
                keyPress();
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\nSacar\n", colors.reset);
                keyPress();
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\nDepositar\n", colors.reset);
                keyPress();
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\nTransferência entre Contas\n", colors.reset);
                keyPress();
                break;
            case 9:
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
                keyPress();
                break;
        }

    } while (opcao !== 9);
}

export function sobre(): void {
    console.log("\n" + "*".repeat(70));
    console.log("Projeto Desenvolvido por: Bianca Caetano dos Reis - beahreis4@gmail.com");
    console.log("https://github.com/bia024 - https://www.linkedin.com/in/bia-caetano/");
    console.log("*".repeat(70));
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    Input.prompt();
}

main();