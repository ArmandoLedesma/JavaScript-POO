//Ejercicio 2: Clase "Dispositivo" y subclase "Smartphone"

//Creación de la clase principal o clase padre "Dispositivo"
class Dispositivo{
    //Creación del método constructor con sus instancias
    constructor(marca, modelo, ano){
        //Definición de los atributos instanciados previamente
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.capacidad = parseFloat(prompt("Ingrese la capacidad del smartphone (mAh): ")); //Atributo adicional (Usuario)
    };

    //Creación del método que permitirá mostrar los detalles de los objetos en pantalla
    verDetalles(){
        document.write(`
            <strong>Marca:</strong> ${this.marca} <br>
            <strong>Modelo:</strong> ${this.modelo} <br>
            <strong>Año:</strong> ${this.ano} <br>
            <strong>Capacidad:</strong> ${this.capacidad} <hr>`);
    };
};

//Creación de la subclase o clase hija "Smartphone"
class Smartphone extends Dispositivo{
    //Extracción del método constructor perteneciente a la clase padre "Dispositivo"
    constructor(marca,modelo,ano, sistema_operativo){ //Se añadió un nuevo atributo a la subclase
        //Creación del supermetodo perteneciente a la clase hija "Smartphone"
        super(marca, modelo, ano);
        //Definimos el atributo previamente instanciado
        this.sistema_operativo = sistema_operativo;
        this.conectividad = parseFloat(prompt("Ingrese la conectividad del smartphone: ")); //Atributo requerido por el usuario
        this.bateria = parseInt(prompt("Ingrese el porcentaje de la bateria: "));
    };

    //Creación del método para simular un encendido y apagado del smartphone
    estadoBateria(){
        document.write(`<div class="alert alert-primary" role="alert">Conectividad ${this.conectividad}G.</div>`);

        if (this.bateria > 0){
            document.write(`<hr>`);
            document.write(`<div class="alert alert-success" role="alert">Carga ${this.bateria}% ¡Equipo encendido!</div>`)
        } else{
            document.write(`<hr>`);
            document.write(`<div class="alert alert-danger" role="alert">Carga ${this.bateria}% ¡Apagando equipo...!</div>`)
        };
    };
};

//Creación de los objetos
const smartphone1 = new Smartphone("Apple", "Iphone 14", 2022, "IOS");

//Llamado a los métodos 
smartphone1.verDetalles()
smartphone1.estadoBateria()