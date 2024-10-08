//Ejercicio 3: Clase "Instrumento" y subclase "Guitarra"

//Creación de la clase principal o clase padre "Instrumento"
class Instrumento{
    //Creación del método constructor perteneciente a la clase padre "Instrumento"
    constructor(tipo_instrumento, marca, material_fabricacion){
        //Definición de los atributos instanciados previamente
        this.tipo_instrumento = tipo_instrumento;
        this.marca = marca;
        this.material_fabricacion = material_fabricacion;
        this.precio = parseFloat(prompt("Precio del instrumento: ")); //Atributo adicional requerido por el usuario
    };

    //Creación del método que permitirá mostrar los detalles en pantalla
    mostrarDetalles(){
        document.write(`
            <strong>Tipo de Instrumento:</strong>${this.tipo_instrumento} <br>
            <strong>Marca:</strong>${this.marca} <br>
            <strong>Material de Fabricación:</strong>${this.material_fabricacion} <br>
            <strong>Precio:</strong>${this.precio} <hr> 
            `);
            
    };

}; 

//Creación de la subclase o clase hija "Guitarra"
class Guitarra extends Instrumento{
    //Extracción del método constructor perteneciente a la clase padre "Instrumento"
    constructor(tipo_instrumento, marca, material_fabricacion, n_cuerdas){ //Se añadió una instancia nueva a la clase hija
        //Creación del supermetodo perteneciente a la clase hija "Guitarra"
        super(tipo_instrumento, marca, material_fabricacion)
        //Definición del nuevo atributo previamente instanciado
        this.n_cuerdas = n_cuerdas;
        this.acordes_basico = prompt("¿Cuántos acordes conoce?").split(',').map(acorde=>acorde.trim());
    };

    //Creación del método que simulará tocar la guitarra
    tocarGuitarra(){
        document.write(`<div class="alert alert-success" role="alert">Numero de cuerdas ${this.n_cuerdas} <div>`)
        const acorde = prompt(`¿Qué acorde quieres tocar? ${this.acordes_basico.join(',')}`);

        if (this.acordes_basico.includes(acorde.trim())){
            document.write(`<hr>`)
            document.write(`<div class="alert alert-success" role="alert">Tocando el acorde ${acorde.trim()} en la guitarra! </div>`)
        } else {
            document.write(`<hr>`)
            document.write(`<div class="alert alert-danger" role="alert">No conoces el acorde ${acorde.trim()} en la guitarra! </div>`)

        };
    };
};

//Creación de los objetos
const guitarra1 = new Guitarra("Guitarra", "Española", "Cedro", 6);

//Llamado a los métodos
guitarra1.mostrarDetalles();
guitarra1.tocarGuitarra();