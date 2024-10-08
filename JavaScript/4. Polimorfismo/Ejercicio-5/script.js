//Ejercicio 4: Clase "Instrumentos" con polimorfismo

//Creación de la clase principal o clase padre "Instrumentos"
class Instrumentos{
    //Creación del método constructor junto con cada instancia
    constructor(instrumento, tipoInstrumento, tamano, marca, material){
        //Definición de los atributos previamente instanciados
        this.instrumento = instrumento;
        this.tipoInstrumento = tipoInstrumento;
        this.tamano = tamano;
        this.marca = marca;
        this.material = material;
    };

    //Creación del método "sonidoInstrumento()" que simulará el sonido para cada instrumento
    sonidoInstrumento(){
        //Retornará el acorde de los instrumentos
        return `Se está tocando la nota Sol...`
    };

};

//Creación de la subclase o clase padre "Guitarra"
class Guitarra extends Instrumentos{ //Herencia
    //Extracción del método constructor perteneciente a la clase padre "Instrumentos"
    constructor(instrumento, tipoInstrumento, tamano, marca, material, numero_cuerdas){ //Se añadió un atributo único en la clase hija "Guitarra"
        //Creación del supermetodo perteneciente a la clase hija "Guitarra"
        super(instrumento, tipoInstrumento, tamano, marca, material);
        //Definición del nuevo atributo previamente instanciado
        this.numero_cuerdas = numero_cuerdas;

    };

    //Aplicación de polimorfismo para la guitarra
    sonidoInstrumento(){
        //Retornará el acorde de la guitarra 
        return `Tocando el acorde DO...`
    };
};

//Creación de la subclase o clase hija "Piano"
class Piano extends Instrumentos{
    //Extracción del método constructor perteneciente a la clase padre "Instrumentos"
    constructor(instrumento, tipoInstrumento, tamano, marca, material, octavas){ //Se agregó un atributo único en la clase hija "Piano"
        //Creación del supermetodo perteneciente a la clase hija "Piano"
        super(instrumento, tipoInstrumento, tamano, marca, material);
        //Definición del nuevo atributo previamente instanciado
        this.octavas = octavas;

    };

    //Aplicación de polimorfismo para el piano
    sonidoInstrumento(){
        //Retornará el acorde para el piano
        return `Tocando el acorde MI...`

    };
};

//Creación de la subclase o clase hija "Trompeta"
class Trompeta extends Instrumentos{ //Herencia
    //Extracción del método constructor perteneciente a la clase padre "Instrumentos"
    constructor(instrumento, tipoInstrumento, tamano, marca, material, pistones){ //Se agregó un atributo único en la clase hija "Trompeta"
        //Creación del supermetodo perteneciente a clase hija "Trompeta"
        super(instrumento, tipoInstrumento, tamano, marca, material);
        //Definición del nuevo atributo previamente instanciado
        this.pistones = pistones;

    };

    //Creación del método "sonidoInstrumento()" que simulará el sonido para cada instrumento
    sonidoInstrumento(){
        //Retornará el acorde de la trompeta
        return `Tocando el acorde SOL...`
    };

};

//Uso de array para crear los objetos con las instancias requeridas
const objetoInstrumento = [
    new Guitarra ("Guitarra", "Cuerda", "Mediano", "Española", "Cedro", "6"), //Creación del objeto para la clase hija "Guitarra"
    new Piano ("Piano", "Teclas", "Grande", "Yamaha", "Electronico", "8"), //Creación del objeto para la clase hija "Piano"
    new Trompeta ("Trompeta", "Viento", "Mediano", "Bach", "Metal", "3") //Creación del objeto para la clase hija "Trompeta"
];

function mostrarInstrumentos(objetoInstrumento) {
    const container = document.getElementById('instrumento-container');

    objetoInstrumento.forEach(instrumento => {
        const card = document.createElement('div');
        card.className = 'col-md-4 instrumento-card';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${instrumento.instrumento}</h5>
                    <p class="card-text"><strong>Tipo Instrumento:</strong> ${instrumento.tipoInstrumento}</p>
                    <p class="card-text"><strong>Tamaño:</strong> ${instrumento.tamano}</p>
                    <p class="card-text"><strong>Marca:</strong> ${instrumento.marca}</p>
                    <p class="card-text"><strong>Material:</strong> ${instrumento.material}</p>
                    <p class="card-text"><strong>Sonido:</strong> ${instrumento.sonidoInstrumento()}</p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
};

mostrarInstrumentos(objetoInstrumento);