//Ejercicio 2: Clase "Producto"

//Creación de la clase principal o clase padre "Producto"
class Producto {
    //Definición del método constructor junto con cada instancia 
    constructor(nombres, precio, cantidad, categoria) {
        this._nombres = nombres; //Atributo privado
        this._precio = precio; //Atributo privado
        this.cantidad = cantidad; //Atributo público
        this.categoria = categoria; //Atributo público
    }

    //Uso del método GET para obtener "._nombres"
    obtenerNombres() {
        return this._nombres;
    };

    //Uso del método SET para modificar "._nombres"
    establecerNombres(nuevoNombre) {
        this._nombres = nuevoNombre;
    };

    //Uso del método GET para obtener "._precio"
    obtenerPrecio() {
        return this._precio;
    };

    //Uso del método SET para modificar "._precio"
    establecerPrecio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    };

    //Creación del método "mostrarDetalles()"
    mostrarDetalles() {
        return `
            <strong>Nombres:</strong> ${this._nombres} <br>
            <strong>precio:</strong> ${this._precio} <br>
            <strong>Cantidad:</strong> ${this.cantidad} <br>
            <strong>categoria:</strong> ${this.categoria}`;
    };
};

//Creación del objeto u objetos 
const producto = new Producto("Shampo de Coco", 2500, 10, "Aseo personal");

//Mostrar detalles en la interfaz
document.getElementById('detallesProducto').innerHTML = producto.mostrarDetalles();

// Manejar el formulario para actualizar la información
document.getElementById('modificarForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nuevoNombre = document.getElementById('nuevoNombre').value;
    const nuevoPrecio = document.getElementById('nuevoPrecio').value;

    producto.establecerNombres(nuevoNombre);
    producto.establecerPrecio(nuevoPrecio);

    //Actualizar la visualización de detalles
    document.getElementById('detallesProducto').innerHTML = producto.mostrarDetalles();

    //Método para limpiar los campos del formulario
    this.reset();
});
