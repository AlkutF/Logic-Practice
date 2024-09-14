let matriz = [];
document.getElementById("ejercicio4").addEventListener('submit', function(e) {
    e.preventDefault();
    const numeroMatrices = parseInt(document.getElementById('numeroMatrices').value);
    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);
    matriz = crearMatriz(numeroMatrices, filas, columnas);
    mostrarMatrices(matriz);
});

document.getElementById('multiplicar').addEventListener('click', function() {
    if (matriz.length < 2) {
        alert('Debe haber al menos dos matrices para multiplicar.');
        return;
    }

    try {
        const resultado = multiplicarNMatrices(matriz);
        mostrarMatrizResultado(resultado);
    } catch (error) {
        alert(error.message);
    }
});

function crearMatriz(numeroMatrices, filas, columnas) {
    let matriz = [];
    for (let i = 0; i < numeroMatrices; i++) {
        matriz[i] = [];
        for (let j = 0; j < filas; j++) {
            matriz[i][j] = [];
            for (let k = 0; k < columnas; k++) {
                matriz[i][j][k] = Math.floor(Math.random() * 100);
            }
        }
    }
    return matriz;  
}

function mostrarMatrices(matriz) {
    const contenedor = document.getElementById('matrices');
    contenedor.innerHTML = '';  

    matriz.forEach((mat, index) => {
        let matrizHtml = `<h3>Matriz ${index + 1}</h3><table border="1">`;
        mat.forEach(fila => {
            matrizHtml += '<tr>';
            fila.forEach(columna => {
                matrizHtml += `<td>${columna}</td>`;
            });
            matrizHtml += '</tr>';
        });
        matrizHtml += '</table><br>';
        contenedor.innerHTML += matrizHtml;
    });
}

function multiplicarNMatrices(matrices) {
    let resultado = matrices[0];
    for (let i = 1; i < matrices.length; i++) {
        resultado = multiplicarMatrices(resultado, matrices[i]);
    }
    return resultado;
}

function multiplicarMatrices(matriz1, matriz2) {
    const filasMatriz1 = matriz1.length;
    const columnasMatriz1 = matriz1[0].length;
    const filasMatriz2 = matriz2.length;
    const columnasMatriz2 = matriz2[0].length;
    
    if (columnasMatriz1 !== filasMatriz2) {
        throw new Error("No se pueden multiplicar las matrices: el número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz.");
    }

    let resultado = [];
    for (let i = 0; i < filasMatriz1; i++) {
        resultado[i] = [];
        for (let j = 0; j < columnasMatriz2; j++) {
            resultado[i][j] = 0; 
            for (let k = 0; k < columnasMatriz1; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }
    return resultado;
}

function mostrarMatrizResultado(resultado) {
    const contenedor = document.getElementById('resultado');
    contenedor.innerHTML = ''; 

    let resultadoHtml = `<h3>Resultado de la Multiplicación de las Matrices</h3><table border="1">`;
    resultado.forEach(fila => {
        resultadoHtml += '<tr>';
        fila.forEach(columna => {
            resultadoHtml += `<td>${columna}</td>`;
        });
        resultadoHtml += '</tr>';
    });
    resultadoHtml += '</table>';
    contenedor.innerHTML = resultadoHtml;
}
