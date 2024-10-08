//Creación de la clase Figura 
class Figura{
    //Creación del método constructor para definir las instancias que llevaran los objetos
    constructor(nombre, puntos, lineas, lados, clasificacion){
        //Creación de los atributos usando la palabra reservada "this"
        this.nombre = nombre //Propiedades de las instancias
        this.puntos = puntos
        this.lineas = lineas 
        this.lados = lados
        this.clasificacion = clasificacion
    };

    //Creación del método mostrarDetalles() para cada uno de los objetos
    mostrarDetalles(){
        document.write(`<h3>Detalles de las Figuras Geometricas</h3><br>`);
        document.write(`<strong>Nombre</strong>: ${this.nombre}<br>`);
        document.write(`<strong>Puntos</strong>: ${this.puntos}<br>`);
        document.write(`<strong>Lineas</strong>: ${this.lineas}<br>`);
        document.write(`<strong>Lados</strong>: ${this.lados}<br>`);
        document.write(`<strong>Clasificación</strong>: ${this.clasificacion}<br>`);
        
    };
};

//Creación de los objetos por medio de la instancia de la clase Figuras
let figura1 = new Figura("Cuadrado", "4", "4", "4", "Polígono");
let figura2 = new Figura("Rectangulo", "4", "4", "4", "Polígono");
let figura3 = new Figura("Rombo", "4", "4", "4", "Rombo");


//Llamado de los métodos creados para mostrar los detalles
figura1.mostrarDetalles()
figura2.mostrarDetalles()
figura3.mostrarDetalles()