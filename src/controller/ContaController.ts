import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{
    
    // Coleção Array que vai aramzenar os Objetos Conta
    private _listaContas: Array<Conta> = new Array<Conta>();

    // Controlar os Números das Contas
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar();
        else
            console.log("\n A conta não foi encontrada!")
    }
    
    listarTodas(): void {
        for(let conta of this._listaContas){
            conta.visualizar();
        }
        
    }
    cadastrar(conta: Conta): void {
        this._listaContas.push(conta);
        console.log("A Conta foi cadastrada com sucesso!")
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null) {
             this._listaContas[this._listaContas.indexOf(buscaConta)] = conta;
             console.log("\nA conta foi excluída!")
        }else {
             console.log("\nA conta não foi encontrada!")
        }
    }
    deletar(numero: number): void {
       let buscaConta = this.buscarNoArray(numero);

       if(buscaConta !== null) {
            this._listaContas.splice(this._listaContas.indexOf(buscaConta), 1);
            console.log("\nA conta foi excluída!")
       }else {
            console.log("\nA conta não foi encontrada!")
       }
    }

    sacar(numero: number, valor: number): void {
       
    }
    
    depositar(numero: number, valor: number): void {
       
    }
    
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
       
    }

    // Método Auxiliares

    public gerarNumero(): number{
        return ++ this.numero
    }

    public buscarNoArray(numero: number): Conta | null {
        for(let conta of this._listaContas){
            if(conta.numero == numero)
                return conta;
        }

        return null;
    }

}