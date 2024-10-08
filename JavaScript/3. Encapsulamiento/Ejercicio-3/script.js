//Ejercicio 3: Clase "Libro"

//Creación de la clase principal o clase padre "Libro"
class Libro {
    //Definición del método constructor junto con cada instancia 
    constructor(titulo, autor, isbn, editorial) {
        this._titulo = titulo; //Atributo privado
        this._autor = autor; //Atributo privado
        this._isbn = isbn; //Atributo privado
        this.editorial = editorial; //Atributo público
    };

    //Uso del método GET para obtener "._titulo"
    obtenerTitulo() {
        return this._titulo;
    };

    //Uso del método SET para modificar "._titulo"
    establecerTitulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    };

    //Uso del método GET para obtener "._autor"
    obtenerAutor() {
        return this._autor;
    };

    //Uso del método SET para modificar "._autor"
    establecerAutor(nuevoAutor) {
        this._autor = nuevoAutor;
    };

    //Creación del método "mostrarDetalles()"
    mostrarDetalles() {
        return `
            <strong>Titulo:</strong> ${this._titulo} <br>
            <strong>Autor:</strong> ${this._autor} <br>
            <strong>ISBN:</strong> ${this._isbn} <br>
            <strong>Editorial:</strong> ${this.editorial} <br>`;
    };
};

//Creación del objeto u objetos 
const libro = new Libro("Cien años de soledad", "Gabriel Garcia Marquez", 9788497592208, "Debolsillo");

//Mostrar detalles en la interfaz
document.getElementById('detallesLibro').innerHTML = libro.mostrarDetalles();

// Manejar el formulario para actualizar la información
document.getElementById('modificarForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nuevoTitulo = document.getElementById('nuevoTitulo').value;
    const nuevoAutor = document.getElementById('nuevoAutor').value;

    libro.establecerTitulo(nuevoTitulo);
    libro.establecerAutor(nuevoAutor);

    //Actualizar la visualización de detalles
    document.getElementById('detallesLibro').innerHTML = libro.mostrarDetalles();

    //Método para limpiar los campos del formulario
    this.reset();
});
