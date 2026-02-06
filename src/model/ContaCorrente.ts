//essa classe será uma herança. usamos extense - um puxadinho de uma outra classe
import { colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
  public teste(): void {
    throw new Error("Method not implemented.");
  }
  // vai herdar numero, saldo, tipo, depositar, visualizar. não tem meia herança. herda tudo.
  // no caso de conta corrente temos um caso especifico: o limite (o cheque especial)

  // Atributos Específicos de Conta Corrente (algo que seja exclusivo de conta corrente):
  private _limite: number;

  // precisamos criar o método construtor. ele não vai ter só o limite. ele precisa ter todos os atributos que foram herdados, senao na hora de criar vai dar erro. precisa passar os 6 atributos
  // . os 5 de conta e o outro

  //   Conta Corrente:
  constructor(
    numero: number,
    agencia: number,
    titular: string,
    tipo: number,
    saldo: number,
    limite: number,
  ) {
    // aqui vem as coisas que são de conta
    super(numero, agencia, titular, tipo, saldo); // chama o Construtor da Super Classe
    this._limite = limite;
  }

  // Métodos GET e SET específicos da Classe ContaCorrente
  public get limite(): number {
    return this._limite
  }

  public set limite(value: number) {
    this._limite = value
  }

  // Metodo Sacar Sobrescrito
     public sacar(valor: number): boolean {
          if(valor <= 0){
              console.log(
                  colors.fg.red, 
                  "O valor deve ser positivo", 
                  colors.reset,
              )
          return false
  }
          if(valor > (this.saldo + this._limite)){
              console.log(
                  colors.fg.red, 
                  'Saldo Insuficiente!', 
                  colors.reset,
              )
              return false
          }
                  this.saldo -= valor;
                  return true
      }

  // Método Pormorfismo: reescrever o metodo visualuizar
  // esse tem a mesma assinatura. só que usando o super dentro pra chamar o metodo visualizar de conta , acrescentndo depois o atributo que falta
  public visualizar(): void {
    // Mpetodo vizualisar sobrescrito (Polimorfismo)
    super.visualizar();
    console.log(`Limite da conta: ${this._limite.toFixed(2)}`);
  }

  // Tarefa de hoje: criar a poupança. atributo chamado aniversario e sobrescrever o visualizar. os outros deixar como ta em conta


  // quem é a 'super' do erro? super Classe
  // ctrl shift P
  //   enquanto nao fizer a chamada, ele vai continuar dando erro no codigo
}
