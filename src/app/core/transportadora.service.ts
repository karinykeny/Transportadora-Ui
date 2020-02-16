import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TransportadoraService {
  constructor() {}

  getTransportadoras() {
    return [
      { id: 1, nome: "Turma da Mônica" },
      { id: 2, nome: "Turma do Cebolinha" },
      { id: 3, nome: "Turma do Pablo" }
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
