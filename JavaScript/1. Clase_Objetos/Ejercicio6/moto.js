//Definición de la clase (class) Moto 
class Moto{
    //Creación del método constructor
    constructor(marca, modelo, motor, chasis, ruedas, suspension){
        //Se usa la palabra "this" para apuntar a los objetos definidos en el método constructor
        this.marca = marca
        this.modelo = modelo
        this.motor = motor
        this.chasis = chasis
        this.ruedas = ruedas
        this.suspension = suspension

    };

    //Creación del método mostrarDetalles() para los atributos y métodos de cada objeto
    mostrarDetalles(){
        document.write(`<h3>Detalle de la moto</h3><br>`);
        document.write(`<strong>Marca</strong>: ${this.marca} <br>`);
        document.write(`<strong>Modelo</strong>: ${this.modelo} <br>`);
        document.write(`<strong>Motor</strong>: ${this.motor} <br>`);
        document.write(`<strong>Chasis</strong>: ${this.chasis} <br>`);
        document.write(`<strong>Ruedas</strong>: ${this.ruedas} <br>`);
        document.write(`<strong>Suspensión</strong>: ${this.suspension} <br>
            <hr>`);
        
    };
};

//Creación de los objetos con sus atributos definidos 
let moto1 = new Moto("Suzuki Dr 650", 2017, 4+"T", "Acero", 2, "Delantera y Trasera");
let moto2 = new Moto("Yamaha Yz 259", 2023, 2+"T", "Aluminio", 2, "Delantera y Trasera");
let moto3 = new Moto("Kawasaki Klx 150", 2020, 4+"T", "Aluminio", 2, "Delantera y Trasera");


//Llamado del método mostrarDetalles() para implementar a cada uno de los objetos creados
moto1.mostrarDetalles()
moto2.mostrarDetalles()
moto3.mostrarDetalles()
