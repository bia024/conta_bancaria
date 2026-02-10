import { colors } from '../util/Colors'
import { formatarMoeda } from '../util/Currency';
import { Conta } from './Conta'

export class ContaCorrente extends Conta {
    
	// Atributos específicos de Conta Corrente
	private _limite: number

	// Construtor com a chamada para a Super Classe
	constructor(
		numero: number,
		agencia: number,
		titular: string,
		tipo: number,
		saldo: number,
		limite: number,
	) {
		super(numero, agencia, titular, tipo, saldo); // Chama o Construtor da Super Classe
		this._limite = limite;
	}

	// Métodos GET e SET específicos da Classe ContaCorrente
	public get limite(): number {
		return this._limite
	}

	public set limite(value: number) {
		this._limite = value
	}

    // Método sacar Sobrescrito
	public sacar(valor: number): boolean {
		if (valor <= 0) {
			console.log(
				colors.fg.red,
				'\nO valor deve ser positivo',
				colors.reset,
			)
			return false
		}

		if (valor > (this.saldo + this._limite)) {
			console.log(
				colors.fg.red,
				'\nSaldo Insuficiente!',
				colors.reset,
			)
			return false
		}

		this.saldo -= valor
		return true
	}

	// Método visualizar sobrescrito (Polimorfismo)
	public visualizar(): void {
		super.visualizar()
		console.log(`Limite da conta: ${formatarMoeda(this._limite)}`)
	}
}