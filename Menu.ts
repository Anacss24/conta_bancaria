import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    const contas: ContaController = new ContaController();

    // Novas instâncias da Classe Conta Corrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'João da Silva', 1000.00, 100.00));

    // Novas instâncias da Classe Conta Poupança 
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1234, 2, "Hugo Silva", 20000.00, 4))
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1234, 2, "Ana Claudia", 30000.00, 4))

    while (true) {

        console.log(colors.bg.black, colors.fg.cyan,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("****************************************3*************", colors.reset);
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
        console.log(colors.bg.black, colors.fg.cyan, "*****************************************************");
        console.log("                                                     ",
            colors.reset,);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                console.log("Digite o número da agência: ");
                agencia = readlinesync.questionInt("")

                console.log("Digite o nome do titular da conta: ")
                titular = readlinesync.question("")

                console.log("Digite o Tipo da Conta: ")
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log("Digite o Saldo da conta: ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta: ")
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break;
                    case 2:
                        console.log("Digite a Data de Aniversário da Conta: ");
                        aniversario = readlinesync.questionInt('')
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }
                keyPress()
                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas()
                keyPress()
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                console.log('Digite o número da Conta: ')
                numero = readlinesync.questionInt("")
                contas.procurarPorNumero(numero)
                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                console.log("Digite o número da Conta")
                numero = readlinesync.questionInt("")
                let conta = contas.buscarNoArray(numero)
                if (conta) {

                    console.log('Digite o Número da Agência: ');
                    agencia = readlinesync.questionInt("");

                    console.log('Digite o Nome do Titular da Conta: ');
                    titular = readlinesync.question("");

                    console.log('Digite o Saldo da Conta: ');
                    saldo = readlinesync.questionFloat("");

                    tipo = conta.tipo;

                    switch (tipo) {
                        case 1:
                            console.log('Digite o Limite da Conta: ');
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
                        case 2:
                            console.log('Digite a Data de Aniversário da Conta: ');
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }

                } else {
                    console.log(`\nA Conta número: ${numero} não foi encontrada!`)
                }

                keyPress()
                break;

            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("")
                contas.deletar(numero)
                keyPress()
                break;
            case 6:
                console.log("\n\nSaque\n\n");

                console.log('Digite o número da Conta: ')
                numero = readlinesync.questionInt('')

                console.log("Digite o valor do Saque: ")
                valor = readlinesync.questionFloat('')

                contas.sacar(numero, valor)
                keyPress()
                break;
            case 7:
                console.log("\n\nDepósito\n\n");
   
                console.log('Digite o número da Conta: ')
                numero = readlinesync.questionInt('')

                console.log("Digite o valor do depósito: ")
                valor = readlinesync.questionFloat('')

                contas.depositar(numero, valor)
                keyPress()
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                console.log("Digite o número da Conta de Origem: ")
                numero = readlinesync.questionInt('')

                console.log("Digite o número da Conta de Destino: ")
                numeroDestino = readlinesync.questionInt('')

                console.log("Digite o valor do Saque: ")
                valor = readlinesync.questionFloat('')

                contas.transferir(numero, numeroDestino, valor)
                keyPress()
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

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}


main();