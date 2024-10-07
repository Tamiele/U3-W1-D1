interface iSim {
  credito: number;
  numeroChiamate: number;
  costo: number;
}

class User implements iSim {
  nome: string;
  cognome: string;
  credito: number;
  numeroChiamate: number;
  costo: number;

  constructor(
    _nome: string,
    _cognome: string,
    _credito: number,
    _numeroChiamate: number = 0,
    _costo: number = 0.2
  ) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.credito = _credito;
    this.numeroChiamate = _numeroChiamate;
    this.costo = _costo;
  }
  ricarica(addCredito: number): number {
    return (this.credito += addCredito);
  }
  chiamata(chiamataEffettuata: number) {
    let totaleCostoChiamate = this.costo * chiamataEffettuata;

    if (this.credito < totaleCostoChiamate) {
      console.log("non hai abbastanza credito disponibile");
    } else {
      this.numeroChiamate += chiamataEffettuata;
      this.credito -= totaleCostoChiamate;
    }
  }
  chiama404(): number {
    return this.credito;
  }
  getNUmeroChiamate(): number {
    return this.numeroChiamate;
  }
  azzeraChiamate() {
    this.numeroChiamate = 0;
  }
}

let user1 = new User("michele", "santo", 5);

user1.ricarica(40);
console.log(user1);

user1.chiamata(10);
console.log(user1);

user1.chiama404();
console.log(user1);

user1.chiamata(20);
console.log(user1.getNUmeroChiamate());
