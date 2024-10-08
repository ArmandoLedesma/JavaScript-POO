//Creación de la clase Animal 
class Animal{
    //Creación del método constructor 
    constructor(animal, color, tamaño, especie, habitad, edad_promedio){
        //Se usa la palabra "this" para apuntar a los objetos definidos en el método constructor
        this.animal = animal //Propiedades de la instancia
        this.color = color 
        this.tamaño = tamaño
        this.especie = especie
        this.habitad = habitad
        this.edad_promedio = edad_promedio
    };

    //Creación del método para mostrarDetalles() de los objetos 
    mostrarDetalles(){
        document.write(`<h3>Detalles de los Animales</h3><br>`);
        document.write(`<strong>Animal</strong>: ${this.animal} <br>`);
        document.write(`<strong>Color</strong>: ${this.color} <br>`);
        document.write(`<strong>Tamaño</strong>: ${this.tamaño} <br>`);
        document.write(`<strong>Especie</strong>: ${this.especie} <br>`);
        document.write(`<strong>Habitad</strong>: ${this.habitad} <br>`);
        document.write(`<strong>Edad Promedio</strong>: ${this.edad_promedio} <br>
            <hr>`);

    };

    //Creación del método determinarEdad() para cada objeto
    determinarEdad(){
        let edad = parseInt(prompt("Ingrese la edad del animal: "))

        if (edad < 1){
            document.write(`El animal se encuentra en etapa de infancia <br>
                <hr>`);   
        } else if (edad >= 1 && edad < 3){
            document.write(`El animal se encuentra en etapa de junventud <br>
                <hr>`);
        } else if (edad >= 3 && edad < 5){
            document.write(`El animal se encuentra en etapa de adolescencia <br>
                <hr>`);
        } else if (edad >= 5 && edad < 10){
            document.write(`El animal se encuentra en etapa de adultez <br>
                <hr>`);
        } else if (edad >= 10){
            document.write(`El animal se encuentra en etapa de vejez <br>
                <hr>`)
        } else{
            document.write(`Valor no válido`)
        }
    };
};


//Creación de los objetos por medio de instanciar la clase Animal
let animal1 = new Animal("Gato", "Gris", "Pequeño", "Felino", "Domestico", 12);
let animal2 = new Animal("Perro", "Gris y Blanco", "Grande", "Canino", "Domestico", 15);
let animal3 = new Animal("Loro", "Verde", "Pequeño", "Psitácidas", "Domestico", 60);


//Llamado de los métodos creados para mostrar los detalles y etapa de cada animal
animal1.mostrarDetalles()
animal1.determinarEdad()
animal2.mostrarDetalles()
animal2.determinarEdad()
animal3.mostrarDetalles()
animal3.determinarEdad()