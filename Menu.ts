import leia from "readline-sync";
import { colors } from './src/util/Colors';

export function main() {
    let opcao: number;

    const menu = `
${"*".repeat(70)}
${" ".repeat(70)}
                BANCO DO BRAZIL COM Z                            
${" ".repeat(70)}
${"*".repeat(70)}
${" ".repeat(70)}
                1 - Criar Conta                                      
                2 - Listar todas as Contas                           
                3 - Buscar Conta por Numero                          
                4 - Atualizar Dados da Conta                         
                5 - Apagar Conta                                     
                6 - Sacar                                            
                7 - Depositar                                        
                8 - Transferir valores entre Contas                  
                9 - Sair                                             
${" ".repeat(70)}
${"*".repeat(70)}
`;

    do {
        console.log(colors.bg.black, colors.fg.yellow);
        console.log(menu);
        console.log(colors.reset);

        opcao = leia.questionInt("Entre com a opcao desejada: ");

        if (opcao === 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\nCriar Conta\n", colors.reset);
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
    leia.prompt();
}

main();