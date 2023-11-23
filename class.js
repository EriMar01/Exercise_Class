class Bank {
    constructor(arrayCuentas) {
        this.clientes = arrayCuentas;
    }

    logs(){console.log(this)}

    consultarCliente(titular) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === titular) {
                this.logs()
                return this.clientes[i];
            }
        }
    }

    deposito(titular, cantidad) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === titular) {
                let cuenta = this.clientes[i].nroCuenta;
                let saldo = this.clientes[i].saldoEnPesos + cantidad;
                this.clientes[i].saldoEnPesos = saldo;
                console.log("Depósito realizado a su cuenta", cuenta, "y su nuevo saldo es:", saldo);
                return saldo;
            }
        }
    }

    extraccion(titular, retirar) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === titular) {
                let cuenta = this.clientes[i].nroCuenta;
                let saldo = this.clientes[i].saldoEnPesos - retirar;
                this.clientes[i].saldoEnPesos = saldo;
                console.log("Retiro realizado a su cuenta", cuenta, "y su nuevo saldo es:", saldo);
                return saldo;
            }
        }
    }
}

// Example usage:
const arrayCuentas = [
    { titularCuenta: "Alice", nroCuenta: "123456", saldoEnPesos: 1000 },
    { titularCuenta: "Bob", nroCuenta: "654321", saldoEnPesos: 1500 }
];

const banco = new Bank(arrayCuentas);
console.log(banco.consultarCliente("Alice"));
console.log(banco.deposito("Alice", 500));
console.log(banco.extraccion("Bob", 200));

console.log("banco: ",banco.clientes)

//other
const arrayCuentas2 = [
    { titularCuenta: "Ramses", nroCuenta: "123456", saldoEnPesos: 1000000000000000 },
];

const banco2 = new Bank(arrayCuentas2);
console.log("banco2: ",banco2.clientes)

console.log("banco2: ",banco2.deposito("Ramses",10000))
console.log("banco2: ",banco2.clientes)

banco2.clientes[0].saldoEnPesos = 90000000000000000000000
console.log("banco2: ",banco2.clientes)
