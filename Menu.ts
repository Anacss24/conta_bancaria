import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;

    // Novas instâncias da Classe Conta (Objetos)
    const c1: Conta = new Conta(1, 1234, 1, 'Ana Silva', 800000.00);
    const c2: Conta = new Conta(2, 1234, 2, 'Jean Lima', 600000.00);

    //c1.visualizar();

    // Saque nas Contas
    console.log(`\nSacar 100 Reais da Conta C1: ${c1.sacar(100)}`)
    // c1.visualizar();
    console.log(`\nSacar 700000.00 Reais da Conta C2: ${c2.sacar(700000)}`)
    //c2.visualizar();

    // Deposito nas Contas
    console.log(`\n Depositar 200000 Reais da Conta C1: ${c1.depositar(200000)}`)
    //c1.visualizar();
    console.log(`\nDepositar 300000 Reais da Conta C2: ${c2.depositar(300000)}`)
    //c2.visualizar();

    // Novas instâncias da Classe Conta Corrente
    const cc1: ContaCorrente = new ContaCorrente(3, 1234, 1, 'Amanda Magro', 1000000.00, 100000);
    const cc2: ContaCorrente = new ContaCorrente(4, 1234, 1, 'João da Silva', 1000.00, 100.00);

    cc1.sacar(25000.00);
    cc1.visualizar();

    cc2.sacar(1050);
    cc2.visualizar();

    // Novas instâncias da Classe Conta Poupança 
    const cp1: ContaPoupanca = new ContaPoupanca(5, 1234, 2,"Hugo Silva", 500000.00, 4)
    
    cp1.sacar(150000)
    cp1.visualizar()

    while (true) {


        console.log(colors.bg.black, colors.fg.cyan,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************",colors.reset);
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log(colors.bg.black, colors.fg.cyan,"*****************************************************");
        console.log("                                                     ",
            colors.reset,);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");
                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");
                break;
            case 6:
                console.log("\n\nSaque\n\n");
                break;
            case 7:
                console.log("\n\nDepósito\n\n");
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");
                break;
            case 9:
                sobre();
                process.exit(0);

            default:
                console.log("\nOpção Inválida!\n");
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log(colors.bg.black, colors.fg.cyan, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Ana Claudia Santana ");
    console.log("Ana Claudia Santana - anaclaudiasantanadev@gmail.com");
    console.log("github.com/Anacss24");
    console.log("*****************************************************");
}

main();