import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TransportadoraService {
  constructor() {}

  getTransportadoras() {
    return [ {  id: 1,
                nome: 'empresa da segunda', 
                cnpj: '44.056.755/0001-83', 
                telefone: '(81)99691-2471',
                email: 'teste@teste.com.br',
                zap: '(81)99999-9999'
              },
              { id: 2,
                nome: 'empresa da terça', 
                cnpj: '44.056.755/0001-83', 
                telefone: '(81)99691-2471',
                email: 'teste@teste.com.br',
                zap: '(81)99999-9999'
              },
              { id: 3,
                nome: 'empresa da quarta', 
                cnpj: '44.056.755/0001-83', 
                telefone: '(81)99691-2471',
                email: 'teste@teste.com.br',
                zap: '(81)99999-9999'
              }
            ]; 
  }

  getTransportadora(id: number) {
    let transportadoras = this.getTransportadoras();
    for (let i = 0; i < transportadoras.length; i++) {
      let transportadora = transportadoras[i];
      if (transportadora.id == id) {
        return transportadora;
      }
    }
    return null;
  }
}
