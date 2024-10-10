class TareaEmpleado {
    realizar_tarea() {
        throw new Error("Método 'realizar_tarea()' debe ser implementado.");
    }
}

class Ingeniero extends TareaEmpleado {
    realizar_tarea() {
        return "Diseñando y construyendo un nuevo proyecto de ingeniería.";
    }
}

class Doctor extends TareaEmpleado {
    realizar_tarea() {
        return "Atendiendo a pacientes y diagnosticando enfermedades.";
    }
}
