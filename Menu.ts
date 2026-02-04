import leia = require("readline-sync");
import { colors } from "./src/util/colors";
import { Conta } from "./src/model/conta";

export function main() {
  let opcao: number;

  //Intanciar Objetos da Classe Conta

  const c1 = new Conta(1, 1234, "Sofia", 1, 100000.00);

  c1.visualizar();

  //Testes do Método Sacar
  console.log("Sacar 100,00:", c1.sacar(100.00));
  console.log("Sacar 200000,00:", c1.sacar(200000.00));
  console.log("Sacar 0,00:", c1.sacar(0.00));


  //Testes do Método Depositar
  console.log("Depositar -10,00: ");
  c1.depositar(-10.00);

  console.log("Depositar 500,00: ");
  c1.depositar(500.00);

  c1.visualizar();


  while (true) {

    console.log(
     colors.bg.red + colors.fg.black + `
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
    `+colors.reset 
    );

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