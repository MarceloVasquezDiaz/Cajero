// Menú para un cajero simple donde puedes revisar saldo, hacer transferencia o deposito.

// Armador de clase cliente
function Cliente (nombre, identificador, clave, saldo) {
    this.nombre = nombre
    this.identificador = identificador
    this.clave = clave
    this.saldo = saldo
}
// Clientes
var cliente1 = new Cliente('Ana', 1488, 5676, 12000);
var cliente2 = new Cliente('Angela', 6973, 1222, 1030010);
var cliente3 = new Cliente('Leona', 2321, 3133, 231400);
var user = undefined
var clave = undefined

// Lista de clientes
var clientes = [cliente1, cliente2, cliente3]

var clienteDatos;


// Validar
function validar() {
    let encontrado = false;
    while(!encontrado){
        alert('Bienvenido a banca en línea')
        user = prompt('Ingrese su N° de indentificación')
        clave = prompt('Digite su clave')
        for (let i = 0; i < clientes.length; i++) {
            if (user == clientes[i].identificador && clave == clientes[i].clave) {
                clienteDatos = clientes[i]
                menu()
                encontrado = true;
                    break;
            }
        }
        if (!encontrado) {
            alert('Datos incorrectos');
        }
    }
}


// Menu principal
function menu() {
    let validador = true
    alert('Bienvenido a Banca en linea ' + clienteDatos.nombre)
    while (validador) {
        valor = parseInt(prompt('Digite el numero de la opción \n1.- Ver saldo \n2.- Realizar giro \n3.- Realizar depósito \n4.- Salir'));
        switch (valor) {
            case 1:
                alert('Su saldo es de ' + clienteDatos.saldo);
                break;
            case 2:
                transferencia();
                break;
            case 3:
                deposito();
                break;
            case 4:
                validador = false
                break;
        }
    }
}

// Transferencia

function transferencia () {
    let valorTranferencia = parseInt(prompt('Su saldo actual es de $' + clienteDatos.saldo + '\nDigite cuanto desea girar'))
    if (valorTranferencia <= clienteDatos.saldo) {
        if (valorTranferencia > 0) {
            clienteDatos.saldo -= valorTranferencia;
            alert('Giro realizado, su nuevo saldo es de $' + clienteDatos.saldo);
        } else {
            alert('No puede colocar numeros negativos')
        }
    } else {
        alert('Saldo insuficiente.');
    }
}

// Deposito
function deposito () {
    valorDeposito = parseInt(prompt('Su saldo actual es de $' + clienteDatos.saldo + '\nIngrese el deposito'))
    if (valorDeposito > 0) {
        clienteDatos.saldo += valorDeposito
        alert('Deposito realizado, su nuevo saldo es de $' + clienteDatos.saldo);
    } else {
        alert('No puede colocar numeros negativos')
    }
    
}


validar();