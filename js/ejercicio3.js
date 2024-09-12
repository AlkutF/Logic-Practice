let matrices = []; 
document.getElementById("ejercicio3").addEventListener('submit', function(e) {
    e.preventDefault();
    const numeroMatrices = document.getElementById("numeroMatrices").value;
    const matricesElement = document.getElementById("matrices");
    crearMatrices(numeroMatrices, matricesElement);
});

function crearMatrices(numeroMatrices, matricesElement) {
    let html = "<form method='post' id='generarMatrices'>";
    for (let i = 0; i < numeroMatrices; i++) {
        html += `Ingrese el número de columnas de la matriz ${i + 1}<br>`;
        html += `<input type='number' id='columnas-${i}'><br>`;
        html += `Ingrese el número de filas de la matriz ${i + 1}<br>`;
        html += `<input type='number' id='filas-${i}'><br><br>`;
    }
    html += "<input type='submit' value='Generar matrices'></form>";
    matricesElement.innerHTML = html;
    document.getElementById("generarMatrices").addEventListener('submit', function(e) {
        e.preventDefault();
        generarMatrices(numeroMatrices);
    });
}

function generarMatrices(numeroMatrices) {
    matrices = []; 
    const matricesGeneradas = document.getElementById("matricesGeneradas");
    matricesGeneradas.innerHTML = "";
    for (let i = 0; i < numeroMatrices; i++) {
        const columnas = document.getElementById('columnas-' + i).value;
        const filas = document.getElementById('filas-' + i).value;
        let matriz = [];
        for (let f = 0; f < filas; f++) {
            let fila = [];
            for (let c = 0; c < columnas; c++) {
                fila.push(Math.floor(Math.random() * 10));
            }
            matriz.push(fila);
        }
        matrices.push(matriz); // Almacenar la matriz
        let matrizHTML = "<h4>Matriz " + (i + 1) + "</h4><table border='1'>";
        matriz.forEach(fila => {
            matrizHTML += "<tr>";
            fila.forEach(valor => {
                matrizHTML += "<td>" + valor + "</td>";
            });
            matrizHTML += "</tr>";
        });
        matrizHTML += "</table><br>";
        matricesGeneradas.innerHTML += matrizHTML;
    }

    mostrarSuma();
}

function mostrarSuma() {
    const resultadoSuma = document.getElementById("resultadoSuma");
    resultadoSuma.innerHTML = "<h4>Resultado de la suma</h4>";
    const suma = sumarMatrices(matrices);
    let sumaHTML = "<table border='1'>";
    suma.forEach(fila => {
        sumaHTML += "<tr>";
        fila.forEach(valor => {
            sumaHTML += "<td>" + valor + "</td>";
        });
        sumaHTML += "</tr>";
    });
    sumaHTML += "</table>";
    resultadoSuma.innerHTML += sumaHTML;
}

function sumarMatrices(matrices) {
    // Encuentra el número máximo de filas y columnas
    const maxFilas = Math.max(...matrices.map(matriz => matriz.length));
    const maxColumnas = Math.max(...matrices.map(matriz => matriz[0].length));
    // Inicializa la matriz de resultado con ceros
    const resultado = Array.from({ length: maxFilas }, () => Array(maxColumnas).fill(0));
    // Suma cada matriz en la matriz de resultado
    matrices.forEach(matriz => {
        matriz.forEach((fila, i) => {
            fila.forEach((valor, j) => {
                resultado[i][j] += valor;
            });
        });
    });
    return resultado;
}