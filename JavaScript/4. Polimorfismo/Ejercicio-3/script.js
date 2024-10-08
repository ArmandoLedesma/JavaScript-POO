//Clase principal o clase padre "Animales"
class Animales {
    //Creación del método constructor junto con cada instancia
    constructor(animal, especie, tamano, color, habitad) {
        //Definición de los atributos previamente instanciados
        this.animal = animal;
        this.especie = especie;
        this.tamano = tamano;
        this.color = color;
        this.habitad = habitad;
    };

    //Creación del método "sonidoAnimal()" que simulará el sonido particular de cada animal
    sonidoAnimal() {
        //Retorna el sonido del animal
        return "El animal hace un sonido.";
    }
}

//Creación de la subclase o clase hija "Perro"
class Perro extends Animales { //Herencia
    //Extracción del método constructor perteneciente a la clase padre "Animales"
    constructor(animal, especie, tamano, color, habitad, darNombre) { //Se agregó un atributo único en la clase hija "Perro"
        //Creación del supermetodo pertenciente a la clase hija "Perro"
        super(animal, especie, tamano, color, habitad);
        //Definición del atributo adicional previamente instanciado
        this.darNombre = darNombre; 
    }

    //Aplicación de polimorfismo para la clase hija "Perro"
    sonidoAnimal() {
        //Retornará el sonido del perro
        return "¡Guau!";
    }
}

//Creación de la subclase o clase hija "Gato"
class Gato extends Animales { //Herencia
    //Extracción del método constructor perteneciente a la clase padre "Animales"
    constructor(animal, especie, tamano, color, habitad, colorOjos) { //Se agregó un atributo único en la clase hija "Gato"
        //Creación del supermetodo pertenciente a la clase hija "Gato"
        super(animal, especie, tamano, color, habitad);
        //Definición del atributo adicional previamente instanciado
        this.colorOjos = colorOjos;
    }

    //Aplicación de polimorfismo para la clase hija "Gato"
    sonidoAnimal() {
        //Retornará el sonido el gato
        return "¡Miau!";
    }
}

//Creación de la subclase o clase hija "Pajaro"
class Pajaro extends Animales { //Herencia
    //Extracción del método constructor perteneciente a la clase padre "Animales"
    constructor(animal, especie, tamano, color, habitad, colorPlumaje) { //Se agregó un atributo único en la clase hija "Pajaro"
        //Creación del supermetodo pertenciente a la clase hija "Pajaro"
        super(animal, especie, tamano, color, habitad);
        //Definición del atributo adicional previamente instanciado
        this.colorPlumaje = colorPlumaje;
    }

    //Aplicación de polimorfismo para la clase hija "Pajaro"
    sonidoAnimal() {
        //Retornará el canto del pájaro
        return "fli-lu-fli-lu!";
    }
}

//Uso de array para crear los objetos con las instancias requeridas
const animales = [
    new Perro("Perro", "Labrador", "Grande", "Negro", "Casa", "Rex"), //Creación del objeto para la clase hija "Perro"
    new Gato("Gato", "Siames", "Pequeño", "Blanco", "Casa", "Azul"), //Creación del objeto para la clase hija "Gato"
    new Pajaro("Pájaro", "Canario", "Pequeño", "Amarillo", "Jaula", "Amarillo") //Creación del objeto para la clase hija "Pajaro"
];


function mostrarAnimales(animales) {
    const container = document.getElementById('animales-container');

    animales.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'col-md-4 animal-card';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${animal.animal} (${animal.especie})</h5>
                    <p class="card-text"><strong>Tamaño:</strong> ${animal.tamano}</p>
                    <p class="card-text"><strong>Color:</strong> ${animal.color}</p>
                    <p class="card-text"><strong>Hábitat:</strong> ${animal.habitad}</p>
                    <p class="card-text"><strong>Sonido:</strong> ${animal.sonidoAnimal()}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
};


mostrarAnimales(animales);
