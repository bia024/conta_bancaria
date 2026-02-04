import { colors } from '../util/Colors';
export class Conta{
    
    // Atributo da Classe
    // todo atributo privado , colocamos underline _ na frente dele
    private _numero: number;
    private _agencia: number;
    private _titular: string;
    private _tipo: number;
    private _saldo: number;

    // metodo construtor e get - 1 pra cada atributo. teremos 5 de cada
    // metodo construtor : ctrl + shift + P e pesquisar por "Typescript Constructor"

    // Método Construtor
	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._titular = titular;
		this._tipo = tipo;
		this._saldo = saldo;
	}

    // Typescript Generate ALL Getter and Setter
    // JS Docs (os comentários de documentação acima do código. se eu n for gerar a documentação, deletar)
    
    // Métodos Get e Set
	public get numero(): number {
		return this._numero;
	}

    
	public get agencia(): number {
		return this._agencia;
	}

    
	public get titular(): string {
		return this._titular;
	}

    
	public get tipo(): number {
		return this._tipo;
	}

    
	public get saldo(): number {
		return this._saldo;
	}

    
	public set numero(value: number) {
		this._numero = value;
	}

    
	public set agencia(value: number) {
		this._agencia = value;
	}

    
	public set titular(value: string) {
		this._titular = value;
	}

    
	public set tipo(value: number) {
		this._tipo = value;
	}

    
	public set saldo(value: number) {
		this._saldo = value;
	}
    
    // Métodos Auxiliares

    public sacar(valor: number): boolean {
        if(valor <= 0){
            console.log(colors.fg.red, "O valor deve ser positivo", colors.reset);
        return false;
}
if(valor > this._saldo){
    console.log(colors.fg.red, "Saldo Insuficiente!", colors.reset);
    return false;
}
        this._saldo -= valor;
        return true;
        
    }
    public depositar(valor: number): boolean {
        if(valor <= 0){
            console.log(colors.fg.red, "O valor deve ser positivo", colors.reset);
            return false;
        }

        this._saldo += valor;
        return true;

        if(valor > this._saldo){
            console.log(colors.fg.red, "Saldo Insuficiente!", colors.reset);
            return true;
        }
        this._saldo += valor;
        return true;
                
    }

    // sem precisarmos fazer muitos consoles.log

    // Aqui vem as opções de conferencia de saque (se deu certo,) para fazer o saque

    public visualizar(): void {

        let tipo: string;

        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente";
            break;
            case 2:
                tipo = "Conta Poupança"
            break;
            default:
                tipo = "Tipo Inválido!";
        }

        console.log("\n*************************************");
        console.log("           DADOS DA CONTA            ");
        console.log("*************************************");
        console.log(`Número da Conta: ${this._numero}`);
        console.log(`Número da Agência: ${this._agencia}`);
        console.log(`Nome do Titular: ${this._titular}`);
        console.log(`Tipo da Conta: ${tipo}`);
        console.log(`Saldo da Conta: R$ ${this._saldo.toFixed(2)}`);
        
    }
}