var User = /** @class */ (function () {
    function User(_nome, _cognome, _credito, _numeroChiamate, _costo) {
        if (_numeroChiamate === void 0) { _numeroChiamate = 0; }
        if (_costo === void 0) { _costo = 0.2; }
        this.nome = _nome;
        this.cognome = _cognome;
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.costo = _costo;
    }
    User.prototype.ricarica = function (addCredito) {
        return (this.credito += addCredito);
    };
    User.prototype.chiamata = function (chiamataEffettuata) {
        var totaleCostoChiamate = this.costo * chiamataEffettuata;
        if (this.credito < totaleCostoChiamate) {
            console.log("non hai abbastanza credito disponibile");
        }
        else {
            this.numeroChiamate += chiamataEffettuata;
            this.credito -= totaleCostoChiamate;
        }
    };
    User.prototype.chiama404 = function () {
        return this.credito;
    };
    User.prototype.getNUmeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var user1 = new User("michele", "santo", 5);
user1.ricarica(40);
console.log(user1);
user1.chiamata(10);
console.log(user1);
user1.chiama404();
console.log(user1);
user1.chiamata(20);
console.log(user1.getNUmeroChiamate());
