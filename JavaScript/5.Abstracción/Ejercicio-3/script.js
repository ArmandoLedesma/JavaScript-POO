class FormaGeometrica {
    constructor(nombre) {
        this.nombre = nombre;
    }

    calcularArea() {
        throw new Error("Método 'calcularArea' debe ser implementado.");
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super("Cuadrado");
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super("Círculo");
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

function mostrarResultado(texto) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML += `<p>${texto}</p>`;
}

document.getElementById('btnCuadrado').addEventListener('click', () => {
    const lado = parseFloat(document.getElementById('lado').value);
    if (isNaN(lado) || lado <= 0) {
        alert("Por favor, introduce un número positivo para el lado.");
        return;
    }
    const cuadrado = new Cuadrado(lado);
    const area = cuadrado.calcularArea();
    mostrarResultado(`Área del cuadrado: ${area.toFixed(2)}`);
});

document.getElementById('btnCirculo').addEventListener('click', () => {
    const radio = parseFloat(document.getElementById('radio').value);
    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, introduce un número positivo para el radio.");
        return;
    }
    const circulo = new Circulo(radio);
    const area = circulo.calcularArea();
    mostrarResultado(`Área del círculo: ${area.toFixed(2)}`);
});
