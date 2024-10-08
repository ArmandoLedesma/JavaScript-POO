//Ejercicio 1: Clase Electrodomestico y Subclase Refrigerador

//Creación de la clase principal o clase Padre "Electrodomestico"
class Electrodomestico{
    //Creación del método constructor junto con cada instancia
    constructor(marca, color, capacidad){
        //Definición de los atributos previamente instanciados
        this.marca = marca
        this.color = color
        this.capacidad = capacidad
        this.consumo_electrico = parseInt(prompt("Ingrese el consumo electrico (kWh): "))//Atributo adicional 
    };

    //Creación del método para mostrar los detalles de la clase "Electrodomestico"
    MostrarDetalles(){
        document.write(`
            <strong>Marca:</strong> ${this.marca} <br>
            <strong>Color:</strong> ${this.color} <br>
            <strong>Capacidad:</strong> ${this.capacidad} <br>
            <strong>Consumo Electrico:</strong> ${this.consumo_electrico}` 
        );
    };
};

//Creación de la Subclase o Clase Hija "Refrigerador"
class Refrigerador extends Electrodomestico{
    //Extracción del método constructor perteneciente a la clase principal "Electrodomestico"
    constructor(marca,color,capacidad,tipo_refrigerador,temperatura){ //Se añadieron dos atributos a la subclase
        //Creación del supermetodo perteneciente a la subclase o clase hija "Refrigerador"
        super(marca, color, capacidad);
        //Se definen los nuevos atributos instanciados previamente 
        this.tipo_refrigerador = tipo_refrigerador
        this.temperatura = parseFloat(prompt("Ingrese la temperatura (°C): "))
    };

    //Creación del método para ajustar la temperatura 
    AjustarTemperatura(){
        if (this.temperatura > 2 && this.temperatura <= 8){
            document.write(`<hr>`);
            document.write(`<div class="alert alert-success" role="alert">Temperatura de ${this.temperatura} °C. Normal...</div>`)
        }else{
            document.write(`<hr>`);
            document.write(`<div class="alert alert-danger" role="alert">Temperatura de ${this.temperatura} °C. Regulación Necesaria...</div>`)
        };

    };
};

//Creación de los objetos 
let refrigerador1 = new Refrigerador("Mabe", "Gris", 2500, "No Frost");

//Llamado a los métodos
refrigerador1.MostrarDetalles()
refrigerador1.AjustarTemperatura()