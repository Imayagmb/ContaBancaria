import { ContaController } from "./src/controller/ContaController";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { Colors } from "./src/util/Colors";
import { Input } from "./src/util/input";
import { Conta } from "./src/model/Conta";

const contas = new ContaController();
const tipoContas = ["Conta Corrente", "Conta Poupança"];

export function main() {
  let opcao: number;

  criarContasTeste();

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
        criarConta();

        keyPress();
        break;

      case 2:
        console.log(
          Colors.fg.whitestrong,
          "\nListar todas as Contas\n\n",
          Colors.reset,
        );

        listarTodasContas();

        keyPress();
        break;

      case 3:
        console.log(
          Colors.fg.whitestrong,
          "\nBuscar Conta por Número\n\n",
          Colors.reset,
        );

        buscarContaPorNumero();

        keyPress();
        break;

      case 4:
        console.log(
          Colors.fg.whitestrong,
          "\nAtualizar Dados da Conta\n\n",
          Colors.reset,
        );

        atualizarConta();

        keyPress();
        break;

      case 5:
        console.log(Colors.fg.whitestrong, "\nApagar Conta\n\n", Colors.reset);

        deletarContaPorNumero();

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

// 1- NOVA CONTA

function criarConta() {
  console.log("Digite o N° da agência: ");
  const agencia = Input.questionInt("");

  console.log("Digite o nome do titular: ");
  const titular = Input.question("");

  console.log("Selecione o tipo de conta: ");
  const tipo = Input.keyInSelect(tipoContas, "", { cancel: false }) + 1;

  console.log("Digite o saldo da conta: ");
  const saldo = Input.questionFloat("");

  switch (tipo) {
    case 1: // CORRENTE
      console.log("Digite o limite da conta: ");
      const limite = Input.questionFloat("");
      contas.cadastrar(
        new ContaCorrente(
          contas.gerarNumero(),
          agencia,
          titular,
          tipo,
          saldo,
          limite,
        ),
      );

      break;

    case 2: // POUPANÇA
      console.log("Digite o dia do aniversário da Conta: ");
      const aniversario = Input.questionInt("");
      contas.cadastrar(
        new ContaPoupanca(
          contas.gerarNumero(),
          agencia,
          titular,
          tipo,
          saldo,
          aniversario,
        ),
      );

      break;
  }
}

// 2- LISTAR OPÇÕES CADASTRADAS
function listarTodasContas(): void {
  contas.listarTodas();
}

// 3- BUSCAR POR N°

function buscarContaPorNumero(): void {
  console.log("Digite o N° da conta: ");
  const numero = Input.questionInt("");

  contas.procurarPorNumero(numero);
}

// 4- ATUALIZAR DADOS DA CONTA

function atualizarConta(): void {
  console.log("Digite o N° da conta: ");
  const numero = Input.questionInt("");
  const conta = contas.buscarNoArray(numero);

  if (conta !== null) {
    //guarda os valores atuais
    let agencia: number = conta.agencia;
    let titular: string = conta.titular;
    const tipo: number = conta.tipo;
    let saldo: number = conta.saldo;

    // atualização da AGÊNCIA
    console.log(`\nAgência Atual: ${agencia}`);
    console.log(
      "Digite o N° da nova Agência \n (Pressione ENTER para manter o valor atual",
    );
    let entrada = Input.question("");

    agencia = entrada.trim() === "" ? agencia : parseInt(entrada);

    //atualização TITULAR
    console.log(`\nNome atual do titular: ${titular}`);
    console.log(
      "Digite o novo nome do Titular \n (Pressione ENTER para manter o nome atual",
    );
    entrada = Input.question("");

    titular = entrada.trim() === "" ? titular : entrada;

    //atualização do SALDO
    console.log(`\nSaldo Atual: ${saldo}`);
    console.log(
      "Digite o valor do novo saldo \n (Pressione ENTER para manter o saldo atual",
    );
    entrada = Input.question("");

    saldo =
      entrada.trim() === "" ? saldo : parseFloat(entrada.replace(",", "."));

    //ATUALIZAR TIPO
    switch (tipo) {
      case 1: {
        //CC = CORRENTE
        let limite: number = (conta as ContaCorrente).limite;

        console.log(`\nLimite Atual: ${limite}`);
        console.log(
          "Digite o valor do novo limite \n ( Pressione ENTER para manter o valor atual",
        );
        let entrada = Input.question("");

        limite =
          entrada.trim() === ""
            ? limite
            : parseFloat(entrada.replace(",", "."));

        contas.atualizar(
          new ContaCorrente(numero, agencia, titular, tipo, saldo, limite),
        );

        break;
      }

      case 1: {
        // CP = POUPANÇA
        let aniversario: number = (conta as ContaPoupanca).aniversario;

        // atualização ANIVERSÁRIO
        console.log(`\nAniversário Atual: ${aniversario}`);
        console.log(
          "Digite o novo dia do aniversário \n (Pressione ENTER para manter o valor atual",
        );
        let entrada = Input.question("");

        aniversario = entrada.trim() === "" ? aniversario : parseInt(entrada);

        contas.atualizar(
          new ContaPoupanca(numero, agencia, titular, tipo, saldo, aniversario),
        );
        break;
      }
    }
  } else {
    console.log(
      Colors.fg.red,
      `A conta N° ${numero} não existe!`,
      Colors.reset,
    );
  }
}

//5 - DELETAR CONTA PELO N°

function deletarContaPorNumero(): void {
  console.log("Digite o N° da conta: ");
  const numero = Input.questionInt("");

  contas.deletar(numero);
}

//FUNÇÃO COM DADOS DO DEV

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

// FUNÇÃO PAUSA ENTRE AS OPÇÕES DO MENU
function keyPress(): void {
  console.log(Colors.reset, "\nPressione enter para continuar...");
  Input.prompt();
}

//CONTAS PARA TESTE
function criarContasTeste(): void {
  // INSTÂNCIAS CLASSE C.CORRENTE
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      2102,
      "Mylla Moura",
      1,
      9000000.0,
      900000.0,
    ),
  );
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      2202,
      "Marcelo Benson",
      1,
      5000.0,
      500.0,
    ),
  );

  // INSTÂNCIAS CLASSE C.POUPANÇA
  contas.cadastrar(
    new ContaPoupanca(
      contas.gerarNumero(),
      2302,
      "Thiago Soares",
      2,
      30000,
      30,
    ),
  );
  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 2402, "Jhony Karev", 2, 25000, 25),
  );
}

main();