import { Colors } from "./src/util/Colors";
import { Input } from "./src/util/input";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
  let opcao: number;

  // //Intanciar Objetos da Classe Conta

  // const c1 = new Conta(1, 1234, "Sofia", 1, 100000.0);

  // c1.visualizar();

  // //Testes do Método Sacar
  // console.log("Sacar 100,00:", c1.sacar(100.0));
  // console.log("Sacar 200000,00:", c1.sacar(200000.0));
  // console.log("Sacar 0,00:", c1.sacar(0.0));

  // //Testes do Método Depositar
  // console.log("Depositar -10,00: ");
  // c1.depositar(-10.0);

  // console.log("Depositar 500,00: ");
  // c1.depositar(500.0);

  // c1.visualizar();

  // Testando a classe ContaCorrente
  const cc1 = new ContaCorrente(2, 5678, "Luara", 1, 200000.0, 2000.0);

  cc1.visualizar();

  // Teste do Método sacar - conta corrente
  console.log("Sacar R$1000.00", cc1.sacar(1000.00));
  console.log("Sacar R$200000.00", cc1.sacar(200000.00));
  console.log("Sacar R$2.00", cc1.sacar(2.00));

  // Teste depositar
  console.log("Depositar R$500.00")
  cc1.depositar(500.00);

  cc1.visualizar();

  //TESTANDO A CLASSE ContaPoupanca
  const cp1 = new ContaPoupanca(2, 7890, "Liara", 2, 3000000.0, 12);
  cp1.visualizar();

  //Sacar
  console.log("Sacar R$1000000.00", cp1.sacar(1000000.00));
  console.log("Sacar R$3000000.00", cp1.sacar(3000000.00));
  console.log("Sacar R$50000.00", cp1.sacar(50000.00));

  //Testando deposito
  console.log("Sacar R$90000.00", cp1.sacar(90000.00));

  cp1.visualizar();

  while (true) {
    console.log(
      Colors.bg.red +
        Colors.fg.black +
        `
    ╔═══════════════════════════════════════╗
    ║        BANCO DO BRAZIL COM Z          ║
    ║      Seu futuro começa aqui           ║
    ╠═══════════════════════════════════════╣
    ║ 1 - Criar Conta        6 - Sacar      ║
    ║ 2 - Listar Contas      7 - Depositar  ║
    ║ 3 - Buscar por Número  8 - Transferir ║
    ║ 4 - Atualizar Dados    9 - Sair       ║
    ║ 5 - Apagar Conta                      ║
    ╚═══════════════════════════════════════╝
    ` +
        Colors.reset,
    );
    console.log("Entre com a opção desejada:");

    opcao = Input.questionInt(" ");

    if (opcao === 9) {
      console.log(
        Colors.fg.greenstrong,
        "\nBanco do Brazil com Z - O seu Futuro começa aqui!",
      );
      sobre();
      console.log(Colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(Colors.fg.whitestrong, "\nCriar Conta\n", Colors.reset);

        keyPress();
        break;

      case 2:
        console.log(
          Colors.fg.whitestrong,
          "\nListar todas as Contas\n\n",
          Colors.reset,
        );

        keyPress();
        break;

      case 3:
        console.log(
          Colors.fg.whitestrong,
          "\nBuscar Conta por Número\n\n",
          Colors.reset,
        );

        keyPress();
        break;

      case 4:
        console.log(
          Colors.fg.whitestrong,
          "\nAtualizar Dados da Conta\n\n",
          Colors.reset,
        );

        keyPress();
        break;

      case 5:
        console.log(Colors.fg.whitestrong, "\nApagar Conta\n\n", Colors.reset);

        keyPress();
        break;

      case 6:
        console.log(Colors.fg.whitestrong, "\nSaque\n\n", Colors.reset);

        keyPress();
        break;

      case 7:
        console.log(Colors.fg.whitestrong, "\nDepósito\n\n", Colors.reset);

        keyPress();
        break;

      case 8:
        console.log(
          Colors.fg.whitestrong,
          "\nTransferência entre Contas\n\n",
          Colors.reset,
        );

        keyPress();
        break;

      default:
        console.log(
          Colors.fg.red,
          "\nOperação Inválida!",
          Colors.reset,
          Colors.reset,
        );

        keyPress();
        break;
    }
  }
}

function sobre(): void {
  console.log(`
      ${Colors.fg.green}
      ╔══════════════════════════════════════╗
      ║       PROJETO CONTA BANCÁRIA         ║
      ║                                      ║
      ║  Desenvolvido por: Mayara Monteiro   ║
      ║                                      ║
      ║  Email: imayagmb@gmail.com           ║
      ║                                      ║      
      ║  LinkedIn e GitHub: imayagmb         ║
      ║                                      ║
      ║                                      ║
      ╚══════════════════════════════════════╝
      ${Colors.reset}
      `);
}

// Função de pausa entre as opções do menu
function keyPress(): void {
  console.log(Colors.reset, "\nPressione enter para continuar...");
  Input.prompt();
}

main();