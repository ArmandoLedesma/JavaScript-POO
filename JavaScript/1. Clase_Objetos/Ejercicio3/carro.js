//Creamos la clase Carro
class Carro{
    //Creación del método constructor 
    constructor(marca, modelo, peso, tamaño, color){
        //Se usa la palabra "this" para apuntar a los objetos definidos en el método constructor
        this.marca = marca //Propiedades de la instancia
        this.modelo = modelo 
        this.peso = peso
        this.tamaño = tamaño
        this.color = color 

    };

    //Creación del método para mostrarDetalles() de los objetos 
    mostrarDetalles(){
        document.write(`<h3>Detalles de los Carros</h3><br>`);
        document.write(`<strong>Marca</strong>: ${this.marca} <br>`);
        document.write(`<strong>Modelo</strong>: ${this.modelo} <br>`);
        document.write(`<strong>Peso</strong>: ${this.peso} <br>`);
        document.write(`<strong>Tamaño</strong>: ${this.tamaño} <br>`);
        document.write(`<strong>Color</strong>: ${this.color} <br>
            <hr>`);

    };
   

}


//Creación de los objetos por medio de instanciar de la clase Carro
let carro1 = new Carro("Audi", "A4", 1500+"kg", 1.4+"m", "Rojo");
let carro2 = new Carro("Toyota", "Carolla", 1600+"Kg", 4.6+"m", "Plata");
let carro3 = new Carro("Honda", "Civic", 1300+"Kg", 4.5+"m", "Gris");


//Llamado de los métodos creados para mostrar los detalles y etapa de cada animal
carro1.mostrarDetalles()
carro2.mostrarDetalles()
carro3.mostrarDetalles()
