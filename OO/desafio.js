class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(num){
        this._saldo = num;
    }
    sacar(val){
        if(val > this._saldo) return console.log('Saldo insuficiente');
        this._saldo -= val;
        return this._saldo;
    }
    depositar(val){
        this._saldo += val;
        return this._saldo;
    }
}
class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'conta corrente'
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(val){
        this._cartaoCredito = val;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo='conta poupanca';
    }
   
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta universitaria';
    }
    saque(val){
        if(val < 500){
            this._saldo -= val;
            return this._saldo;
        } else {
            return 'Operacao negada';
         }
    }

}
const teste = new ContaCorrente(1, 211, true);
const teste2 = new ContaUniversitaria(2, 333);