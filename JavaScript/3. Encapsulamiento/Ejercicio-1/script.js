//Ejercicio 1: Clase "Persona"

//Creación de la clase principal o clase padre "Persona"
class Persona {
    //Definición del método constructor junto con cada instancia 
    constructor(nombres, apellidos, identidad, fecha_nacimiento, sexo) {
        this._nombres = nombres; //Atributo privado
        this._apellidos = apellidos; //Atributo privado
        this._identidad = identidad; //Atributo privado
        this.fecha_nacimiento = fecha_nacimiento; //Atributo público
        this.sexo = sexo; //Atributo público
    }

    //Uso del método GET para obtener "._nombres"
    obtenerNombres() {
        return this._nombres;
    };

    //Uso del método SET para modificar "._nombres"
    establecerNombres(nuevoNombre) {
        this._nombres = nuevoNombre;
    };

    //Uso del método GET para obtener "._apellidos"
    obtenerApellidos() {
        return this._apellidos;
    };

    //Uso del método SET para modificar "._apellidos"
    establecerApellidos(nuevoApellido) {
        this._apellidos = nuevoApellido;
    };

    //Creación del método "mostrarDetalles()"
    mostrarDetalles() {
        return `
            <strong>Nombres:</strong> ${this._nombres} <br>
            <strong>Apellidos:</strong> ${this._apellidos} <br>
            <strong>Identidad:</strong> ${this._identidad} <br>
            <strong>Fecha de nacimiento:</strong> ${this.fecha_nacimiento} <br>
            <strong>Sexo:</strong> ${this.sexo}`;
    };
};

//Creación del objeto u objetos 
const persona = new Persona("Juan Carlos", "Daza Diaz", 92540101, "23/06/2001", "M");

//Mostrar detalles en la interfaz
document.getElementById('detallesPersona').innerHTML = persona.mostrarDetalles();

// Manejar el formulario para actualizar la información
document.getElementById('modificarForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nuevoNombre = document.getElementById('nuevoNombre').value;
    const nuevoApellido = document.getElementById('nuevoApellido').value;

    persona.establecerNombres(nuevoNombre);
    persona.establecerApellidos(nuevoApellido);

    //Actualizar la visualización de detalles
    document.getElementById('detallesPersona').innerHTML = persona.mostrarDetalles();

    //Método para limpiar los campos del formulario
    this.reset();
});
