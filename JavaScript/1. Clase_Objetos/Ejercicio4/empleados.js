//Creamos la clase Empleado
class Empleado{
    //Creación del método constructor 
    constructor(nombre, puesto, departamento, salario, fecha_contratacion){
        //Se usa la palabra "this" para apuntar a los objetos definidos en el método constructor
        this.nombre = nombre //Propiedades de la instancia
        this.puesto = puesto 
        this.departamento = departamento
        this.salario = salario
        this.fecha_contratacion = fecha_contratacion 

    };

    //Creación del método para mostrarDetalles() de los objetos 
    mostrarDetalles(){
        document.write(`<h3>Detalles de los Carros</h3><br>`);
        document.write(`<strong>Nombre</strong>: ${this.nombre} <br>`);
        document.write(`<strong>Puesto</strong>: ${this.puesto} <br>`);
        document.write(`<strong>Departamento</strong>: ${this.departamento} <br>`);
        document.write(`<strong>Salario</strong>: ${this.salario} <br>`);
        document.write(`<strong>Fecha de Contratacion</strong>: ${this.fecha_contratacion} <br>`);

    };

}


//Creación de los objetos por medio de instanciar de la clase Empleado
let empleado1 = new Carro("Pedro", "Gerente", "Ventas", 1300000, "09/05/2020");
let empleado2 = new Carro("Antonio", "Operario de Producción", "Planta de Producción", 1500000, "23/07/2018");
let empleado3 = new Carro("Maria", "Diseñadora de Moda", "Agencia de Belleza", 2500000, "10/09/2021");


//Llamado de los métodos creados para mostrar los detalles y etapa de cada animal
empleado1.mostrarDetalles()
empleado2.mostrarDetalles()
empleado3.mostrarDetalles()
