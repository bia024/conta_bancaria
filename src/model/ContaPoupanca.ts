import { Conta } from './Conta';

export class ContaPoupanca extends Conta {
    
	// Atributos específicos de Conta Poupança
	private _aniversario: number

	// Construtor com a chamada para a Super Classe
	constructor(
		numero: number,
		agencia: number,
		titular: string,
		tipo: number,
		saldo: number,
		aniversario: number,
	) {
		super(numero, agencia, titular, tipo, saldo); // Chama o Construtor da Super Classe
		this._aniversario = aniversario;
	}

	// Métodos GET e SET específicos da Classe Conta Poupanca
	public get aniversario(): number {
		return this._aniversario
	}

	public set aniversario(value: number) {
		this._aniversario = value
	}

	// Método visualizar sobrescrito (Polimorfismo)
	public visualizar(): void {
		super.visualizar()
		console.log(`Aniversário da conta: ${this._aniversario}`)
	}
}