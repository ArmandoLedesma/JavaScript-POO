class Empleado {
    calcularSalario() {
        throw new Error("Método 'calcularSalario()' debe ser implementado.");
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(salarioMensual) {
        super();
        this.salarioMensual = salarioMensual;
    }

    calcularSalario() {
        return this.salarioMensual;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(tarifaPorHora, horasTrabajadas) {
        super();
        this.tarifaPorHora = tarifaPorHora;
        this.horasTrabajadas = horasTrabajadas;
    }

    calcularSalario() {
        return this.tarifaPorHora * this.horasTrabajadas;
    }
}

function calcularSalarioTiempoCompleto(salarioMensual) {
    const empleado1 = new EmpleadoTiempoCompleto(salarioMensual);
    return empleado1.calcularSalario();
}

function calcularSalarioPorHoras(tarifaPorHora, horasTrabajadas) {
    const empleado2 = new EmpleadoPorHoras(tarifaPorHora, horasTrabajadas);
    return empleado2.calcularSalario();
}
