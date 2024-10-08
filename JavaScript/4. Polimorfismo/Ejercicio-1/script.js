//Ejercicio 1: Clase "Aprendiz" con polimorfismo
class Aprendiz {
    //Creación del método constructor junto con cada instancia
    constructor(nombres, apellidos, cedula, sexo, formacion, regional) {
        //Definición de los atributos previamente instanciados
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.sexo = sexo;
        this.formacion = formacion;
        this.regional = regional;
    };

    //Creación del método "mostrar_info()" que permitirá imprimir los detalles para cada objeto
    mostrar_info() {
        //Retornar información
        return  ` 
            <h4>Información del Aprendiz</h4>
            <strong>Nombre completo:</strong> ${this.nombres} ${this.apellidos} <br>
            <strong>CC:</strong> ${this.cedula} <br>
            <strong>Sexo:</strong> ${this.sexo} <br>
            <strong>Programa de formación:</strong> ${this.formacion} <br>
            <strong>Regional:</strong> ${this.regional} <hr>
        `;
    };
};

//Creación de la subclase o clase hija "Instructor"
class Instructor extends Aprendiz { //Herencia
    //Extracción del método constructor perteneciente a la clase padre "Aprendiz"
    constructor(nombres, apellidos, cedula, sexo, area) { //Se añadió un atributo nuevo único en "Instructor"
        //Creación del supermetodo perteneciente a la clase hija "Instructor"
        super(nombres, apellidos, cedula, sexo);
        //Definición del nuevo atributo previamente instanciado
        this.area = area;
    };

    //Creación del método "mostrar_info()" que permitirá imprimir los detalles para cada objeto
    mostrar_info() {
        //Retornar información
        return `
            <h4>Información del Instructor</h4>
            <strong>Nombre completo:</strong> ${this.nombres} ${this.apellidos} <br>
            <strong>CC:</strong> ${this.cedula} <br>
            <strong>Sexo:</strong> ${this.sexo} <br>
            <strong>Área:</strong> ${this.area} <hr>
        `;
    };
};

//Creación de la subclase o clase hija "Coordinador"
class Coordinador extends Aprendiz { //Herencia
    //Extracción del método constructor perteneciente a la clase padre "Aprendiz"
    constructor(nombres, apellidos, cedula, sexo, departamento) { //Se añadió un nuevo atributo único de la clase "Coordinador"
        //Creación del supermetodo perteneciente a la clase hija "Coordinador"
        super(nombres, apellidos, cedula, sexo);
        //Definición del atributo nuevo previamente instanciado
        this.departamento = departamento;
    };

    //Creación del método "mostrar_info()" que permitirá imprimir los detalles para cada objeto
    mostrar_info() {
        //Retornar información
        return `
            <h4>Información del Coordinador</h4>
            <strong>Nombre completo:</strong> ${this.nombres} ${this.apellidos} <br>
            <strong>CC:</strong> ${this.cedula} <br>
            <strong>Sexo:</strong> ${this.sexo} <br>
            <strong>Departamento:</strong> ${this.departamento} <hr>
        `;
    };
};

//Cambiar el tipo de persona o el tipo de rol
document.getElementById('tipo').addEventListener('change', function() {
    const tipo = this.value; //Obtención del valor de la opción seleccionada
    document.getElementById('areaDepartamento').style.display = 'none';//Oculta el elemento que contiene el campo
    document.getElementById('departamento').style.display = 'none';//Oculta el elemento que contiene el campo
    document.getElementById('areaLabel').textContent = tipo === 'instructor' ? 'Área' : 'Departamento';//Cambio de la etiqueta según el campo seleccionado
    //Validación
    if (tipo === 'instructor') {
        document.getElementById('areaDepartamento').style.display = 'block';//Habilita el campo en caso de cumplirse la condición 
    } else if (tipo === 'coordinador') {
        document.getElementById('departamento').style.display = 'block';//Habilita el campo en caso de cumplirse la condición
    };
});

//Gestión del formulario (Seleción y envio)
document.getElementById('personaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    //Recolección de los valores (atributos) de entrada
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const cedula = document.getElementById('cedula').value;
    const sexo = document.getElementById('sexo').value;
    const tipo = document.getElementById('tipo').value;

    let persona; //Declaración de la variable "persona"
    //Validación para determinar el tipo de campo a seleccionar
    if (tipo === 'aprendiz') { //En caso de ser "aprendiz" se muestran los atributos adicionales (Formación y Regional)
        const formacion = prompt("Programa de formación:"); 
        const regional = prompt("Regional:"); 
        persona = new Aprendiz(nombres, apellidos, cedula, sexo, formacion, regional);//Inluyendo el resto de atributos
    } else if (tipo === 'instructor') { //En caso de ser "instructor" se muestra el atributo adicional "area"
        const area = document.getElementById('area').value; 
        persona = new Instructor(nombres, apellidos, cedula, sexo, area); //Incluyendo el resto de atributos 
    } else if (tipo === 'coordinador') { //En caso de ser "coordinador" se muestra el atributo adicional "departamento"
        const departamento = document.getElementById('departamentoInput').value; 
        persona = new Coordinador(nombres, apellidos, cedula, sexo, departamento); //Incluyendo el resto de atributos
    };

    //Mostrar información 
    const resultadoDiv = document.getElementById('resultado'); //Selecciona el "<div>" donde se mostrará la información
    resultadoDiv.innerHTML += persona.mostrar_info(); //Agrega la información de la persona creada
    this.reset(); //Limpia el formulario 
});
