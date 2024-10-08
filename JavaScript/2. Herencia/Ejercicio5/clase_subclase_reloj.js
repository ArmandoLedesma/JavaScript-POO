//Ejercicio 5: Clase "Reloj" y subclase "relojInteligente"

//Creación de la clase principal o clase padre "Reloj"
class Reloj{
    //Creación del método constructor junto con sus instancias perteneciente a la clase padre "Reloj"
    constructor(marca, tipo_reloj, material_correa){
        //Definición de los atributos instanciados previamente
        this.marca = marca;
        this.tipo_reloj = tipo_reloj;
        this.material_correa = material_correa;
        this.precio = parseFloat(prompt("Ingrese el precio del reloj: ")); //Atributo adicional requerido por el usuario
    };

    //Creación del método que me permitirá mostrar los detalles de los objetos en pantalla 
    mostrarDetalles(){
        document.write(`
            <strong>Marca:</strong> ${this.marca} <br>
            <strong>Tipo de Reloj:</strong> ${this.tipo_reloj} <br>
            <strong>Material de Correa:</strong> ${this.material_correa} <br>
            <strong>Precio:</strong> ${this.precio} <br>
            <hr>`);
    };
};

//Creación de la subclase o clase hija "relojInteligente"
class relojInteligente extends Reloj{
    //Extracción del método constructor junto con las instancias perteneciente a la clase padre
    constructor(marca, tipo_reloj, material_correa, tipo_pantalla){ //Se agregó un atributo adicional unico de la clase hija
        //Creación del supermetodo perteneciente a la clase hija
        super(marca, tipo_reloj,material_correa);
        //Definición del atributo adicional instanciado previamente 
        this.tipo_pantalla = tipo_pantalla;
        this.sistema_operativo = prompt("Sistema operativo del reloj: "); //Atributo adicional requerido por el usuario
        this.duracion_bateria = parseInt(prompt("Ingrese la duración de la bateria (en horas): ")); //Atributo adicional requerido por el usuario 
    };

    //Creación del método que simulará el encendido del reloj inteligente
    encenderLaptop(){
        document.write(`<div class="alert alert-primary" role="alert">Sistema Operativo: ${this.sistema_operativo} </div> <hr>`);

        if (this.duracion_bateria > 0){
            
            document.write(`<div class="alert alert-success" role="alert"> ${this.marca} encendido... Bateria ${this.duracion_bateria}% </div>`);
        } else{
            document.write(`<hr>`)
            document.write(`<div class="alert alert-danger" role="alert"> ${this.marca} apagado... Bateria ${this.duracion_bateria}% </div>`);
        };
    };
};

//Creación de los objetos
const relojInteligente1 = new relojInteligente("Apple Watch", "Digital", "Silicona", "OLED");

//Llamado a los métodos
relojInteligente1.mostrarDetalles();
relojInteligente1.encenderLaptop();