//Ejercicio 2: Clase "Vehiculos" con polimorfismo

//Creación de la clase principal o clase padre "Vehiculos"
class Vehiculos{
    //Creación del método constructor junto con cada instancia
    constructor(marca, modelo, color, transmision, asientos){
        //Definición de los atributos previamente instanciados
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.transmision = transmision;
        this.asientos = asientos;
    };

    //Creación del método "mostrar_descripcion()" que permitirá imprimir los detalles en pantalla
    mostrar_descripcion(){
        //Retornar información
        return `
            <h4>Información del Vehiculo</h4>
            <strong>Marca:</strong> ${this.marca} <br>
            <strong>Modelo:</strong> ${this.modelo} <br>
            <strong>Color:</strong> ${this.color} <br>
            <strong>Transmisión:</strong> ${this.transmision} <br>
            <strong>Asientos:</strong> ${this.asientos} <hr>
        `;
    };
};

//Creación de la subclase o clase hija "Carro"
class Carro extends Vehiculos{ //Herencia
    //Extracción del método constructor perteneciente a la clase padre "Vehiculo"
    constructor(marca, modelo, color, transmision, asientos){
        //Creación del supermetodo perteneciente a la clase hija "Carro"
        super(marca, modelo, color, transmision, asientos);
    };

    //Creación del método "mostrar_descripcion()" que permitirá imprimir los detalles en pantalla
    mostrar_descripcion(){
        //Retornar información
        return `
            <h4>Información del Carro</h4>
            <strong>Marca:</strong> ${this.marca} <br>
            <strong>Modelo:</strong> ${this.modelo} <br>
            <strong>Color:</strong> ${this.color} <br>
            <strong>Transmisión:</strong> ${this.transmision} <br>
            <strong>Asientos:</strong> ${this.asientos} <hr>
        `;
    };
};

//Creación de la subclase o clase hija "Moto"
class Moto extends Vehiculos{ //Herencia
    //Extracción del método constructor perteneciente a la clase padre "Vehiculos"
    constructor(marca, modelo, color, transmision, asientos, cilindrada){
        //Creación del supermetodo perteneciente a la clase hija "Moto"
        super(marca, modelo, color, transmision, asientos);
        //Definición del atributo adicional único en la clase hija "Moto"
        this.cilindrada = cilindrada;
    };

    //Creación del método "mostrar_descripcion()" que permitirá imprimir los detalles en pantalla
    mostrar_descripcion(){
        //Retornar información
        return `
            <h4>Información de la Moto</h4>
            <strong>Marca:</strong> ${this.marca} <br>
            <strong>Modelo:</strong> ${this.modelo} <br>
            <strong>Color:</strong> ${this.color} <br>
            <strong>Transmisión:</strong> ${this.transmision} <br>
            <strong>Asientos:</strong> ${this.asientos} <br>
            <strong>Cilindrada:</strong> ${this.cilindrada} <hr>
        `;
    };
};

//Creación de la subclase o clase hija "Bicicleta"
class Bicicleta extends Vehiculos{ //Herencia
    //Extracción del método constructor perteneciente a la clase padre "Vehiculos"
    constructor(marca, modelo, color, transmision, asientos, proposito){ //Se añadió un atributo único en la clase hija
        //Creación del supermetodo perteneciente a la clase hija "Bicicleta"
        super(marca, modelo, color, transmision, asientos);
        //Definición del atributo adicional único en la clase hija "Bicicleta"
        this.proposito = proposito; //Atributo adicional 
    };

    //Creación del método "mostrar_descripcion()" que permitirá imprimir los detalles en pantalla
    mostrar_descripcion(){
        //Retornar información
        return `
            <h4>Información de la Bicicleta</h4>
            <strong>Marca:</strong> ${this.marca} <br>
            <strong>Modelo:</strong> ${this.modelo} <br>
            <strong>Color:</strong> ${this.color} <br>
            <strong>Transmisión:</strong> ${this.transmision} <br>
            <strong>Asientos:</strong> ${this.asientos} <br>
            <strong>Proposito:</strong> ${this.proposito} <hr>
        `;
    };
};

//Cambiar el tipo de vehiculo según con la selección
document.getElementById('tipoVehiculo').addEventListener('change', function(){
    const tipoVehiculo = this.value //Obtención del valor de la opción seleccionada

    document.getElementById('cilindraje').style.display = 'none'; //Oculta el elemento que contiene el campo
    document.getElementById('proposito').style.display = 'none'; //Oculta el elemento que contiene el campo
    document.getElementById('motoCilindraje').textContent = tipoVehiculo === 'moto' ? 'Cilindraje' : 'Proposito'; //Cambio de la etiqueta según el campo seleccionado

    //Validación
    if(tipoVehiculo === 'moto'){
        document.getElementById('cilindraje').style.display = 'block';//Habilita el campo en caso de cumplirse la condición
    } else if(tipoVehiculo === 'bicicleta'){
        document.getElementById('proposito').style.display = 'block';//Habilita el campo en caso de cumplirse la condición
    };
});

//Gestión del formulario para los vehiculos
document.getElementById('vehiculoForm').addEventListener('submit', function(event){
    event.preventDefault();

    //Recolección de los valores (atributos) de entrada
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const transmision = document.getElementById('transmision').value;
    const color = document.getElementById('color').value;
    const asientos = document.getElementById('asientos').value;
    const tipoVehiculo = document.getElementById('tipoVehiculo').value;

    //Declaración de la variable "objeto"
    let objeto

    //Validación para determinar el tipo de campo a seleccionar
    if(tipoVehiculo === 'carro'){
        objeto = new Carro(marca, modelo, color, transmision, asientos)
    } else if(tipoVehiculo === 'moto'){
        const cilindrada = document.getElementById('motoCc').value;
        objeto = new Moto(marca, modelo, color, transmision, asientos, cilindrada)
    } else if(tipoVehiculo === 'bicicleta'){
        const proposito = document.getElementById('biciProposito').value;
        objeto = new Bicicleta(marca, modelo, color, transmision, asientos, proposito)
    };

    //Mostrar información
    const resultadoDiv = document.getElementById('resultado'); //Selecciona el "<div>" donde se mostrará la información
    resultadoDiv.innerHTML += objeto.mostrar_descripcion(); //Agrega la información de la persona creada
    this.reset() //Limpia el formulario
});
