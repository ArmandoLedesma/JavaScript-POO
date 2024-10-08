//Definir la clase (class) Celular
class Celular{
    //Creación del método constructor
    constructor(modelo, marca, color, bateria, camara, precio){
        //Se usa la palabra "this" para apuntar a los objetos definidos en el método constructor
        this.modelo = modelo//Propiedades para la instancia 
        this.marca = marca 
        this.color = color
        this.bateria = bateria 
        this.camara = camara
        this.precio = precio
    };

    //Creación del método para mostrarDetalles() del objeto
    mostrarDetalles(){
        document.write(`<h3>Dispositivo Movil</h3><br>`);
        document.write(`<strong>Marca</strong>:  ${this.modelo} <br>`);
        document.write(`<strong>Modelo</strong>:  ${this.marca} <br>`);
        document.write(`<strong>Color</strong>: ${this.color} <br>`);
        document.write(`<strong>Bateria</strong>: ${this.bateria} <br>`);
        document.write(`<strong>Camara</strong>: ${this.camara} <br>`);
        document.write(`<strong>Precio</strong>: ${this.precio} <br>
            <hr>`);
    };

    //Creación del método para encenderCelular()
    encenderCelular(){
        //Atributo privado solo para el método encender
        let energia = parseInt(prompt("Ingrese el valor de la carga: "));
        
        //Evaluación si tiene carga el celular
        if (energia > 0){
            document.write(`El celular: ${this.modelo} se puede encender <br>`);
            document.write(`|||||||| ${energia} % de carga <br>`);
            document.write(`<hr>`);
        
        } else {
            document.write(`El celular: ${this.modelo} no se puede encender <br>`);
            document.write(`|||||||| ${energia} % de carga <br>`);
            document.write(`<hr>`);
        }
    }

};

//Creación de los objetos por medio de instanciar la clase Celular
let celular1 = new Celular("Xiaomi Mi 13T pro", "Xiaomi", "Blanco", "6500 mAh", "65 Mpx", 1760000);
let celular2 = new Celular("Samsung Galaxy A54", "Samsung", "Gris", "6000 mAp", "64Mpx", 1850000);
let celular3 = new Celular("Iphone 14 pro", "Apple", "Negro", "6200 mAp", "64Mpx", 4850000);


//Llamado de los métodos creados para mostrar los detalles y encendido del celular
celular1.mostrarDetalles();
celular1.encenderCelular();
celular2.mostrarDetalles();
celular2.encenderCelular();
celular3.mostrarDetalles();
celular3.encenderCelular();



