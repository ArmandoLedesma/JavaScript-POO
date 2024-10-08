//Ejercicio 4: Clase "Electrodomestico" y subclase "Laptop"

//Creación de la clase principal o clase padre "Electrodomestico"
class Electrodomestico{
    //Creación del método constructor junto con las instancias perteneciente a la clase padre 
    constructor(marca, modelo, procesador){ 
        //Definición de los atributos instanciados previamente 
        this.marca = marca;
        this.modelo = modelo;
        this.procesador = procesador;
        this.memoriaRam = parseInt(prompt("Cantidad de Memoria Ram: ")); //Atributo adicional requerido por el usuario
    };

    //Creación del método que permitirá mostrar los detalles de los objetos en pantalla
    mostrarDetalles(){
        document.write(`
        <strong>Marca:</strong> ${this.marca}<br>
        <strong>Modelo:</strong> ${this.modelo}<br>
        <strong>Procesador:</strong> ${this.procesador}<br>
        <strong>Memoria Ram:</strong> ${this.memoriaRam}<hr>
        `);
    };
};

//Creación de la subclase o clase hija "Laptop"
class Laptop extends Electrodomestico{
    //Extracción del método contructor perteneciente a la clase padre "Electrodomestico"
    constructor(marca, modelo, procesador, disco_duro){ //Atributo adicional perteneciente unicamente la clase hija
        //Creación del supermetodo perteneciente a la clase hija "Laptop"
        super(marca, modelo, procesador);
        //Definición del nuevo atributo previamente instanciado
        this.disco_duro = disco_duro;
        this.duracion_bateria = parseInt(prompt("Ingrese la duración de la bateria: ")); //Atributo adicional requerido por el usuario

    };

    //Creación del método que simulará encender la laptop
    Encender(){
        document.write(`<div class="alert alert-primary" role="alert"><strong>Disco Duro:</strong> ${this.disco_duro} </div> <hr>`);

        if (this.duracion_bateria > 0){
            document.write(`<div class="alert alert-success" role="alert">La laptop ${this.marca} está encendida. Bateria ${this.duracion_bateria}% </div>`);
        } else{
            document.write(`<div class="alert alert-danger" role="alert">La laptop ${this.marca} está apagada. Bateria ${this.duracion_bateria}%</div>`)
        };
    };
};

//Creación de los objetos 
const laptop1 = new Laptop("Dell", "XPS 15", "Intel i7", "512GB");

//Llamado a los métodos 
laptop1.mostrarDetalles();
laptop1.Encender();
