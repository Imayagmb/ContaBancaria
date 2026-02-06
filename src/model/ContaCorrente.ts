import { Conta } from './Conta';
import { Colors } from '../util/Colors';

export class ContaCorrente extends Conta {

    // Atributos especificos de Conta Corrente
    private _limite: number;


    constructor(
        numero: number,
        agencia: number, 
        titular: string,
        tipo: number, 
        saldo: number, 
        limite: number) {

        // Super chama a super classe, nesse caso Conta
        super(numero, agencia, titular, tipo, saldo);
        this._limite = limite;


    }

    // Métodos GET e SET especificos da Classe ContaCorrente
    public get limite(): number {
        return this._limite;
    }

    public set limite(value: number) {
        this._limite = value;
    }

    // Método sacar sobrescrito
    public sacar(valor: number): boolean {

            if ((valor > (this.saldo + this._limite)) || (valor <= 0)) {
                console.log(Colors.fg.red,'Saldo Insuficiente!', Colors.reset);
                return false;
            }

            this.saldo -= valor;
            return true;
        }

    // Método visualizar sobrescrito (Polimorfismo)
    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da Conta: R$${this.limite.toFixed(2)}`);
    }

}