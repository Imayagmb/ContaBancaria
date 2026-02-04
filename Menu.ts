import leia = require("readline-sync");
import { colors } from "./src/util/colors";

export function main() {
  let opcao: number;

  while (true) {

    console.log(`
    ${colors.bg.black}${colors.fg.red}
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
    ${colors.reset}
    `);

    opcao = leia.questionInt("Entre com a opção desejada: ");

    if (opcao === 9) {
      sobre();
      process.exit(0);
    }

    switch (opcao) {
  case 1:
    console.log("\nCriar Conta\n\n");
    break;

  case 2:
    console.log("\nListar todas as Contas\n\n");
    break;

  case 3:
    console.log("\nBuscar Conta por Número\n\n");
    break;

  case 4:
    console.log("\nAtualizar Dados da Conta\n\n");
    break;

  case 5:
    console.log("\nApagar Conta\n\n");
    break;

  case 6:
    console.log("\nSaque\n\n");
    break;

  case 7:
    console.log("\nDepósito\n\n");
    break;

  case 8:
    console.log("\nTransferência entre Contas\n\n");
    break;

      default:
            console.log(`
    ${colors.fg.red}
    Operação Inválida!
    ${colors.reset}
    `);
        break;
    }
  }
}

    function sobre(): void {
    console.log(`
    ${colors.fg.green}
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
    ${colors.reset}
    `);
}

main()