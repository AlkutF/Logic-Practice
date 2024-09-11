document.getElementById("ejercicio2").addEventListener('submit', function(e) {
    e.preventDefault();
    
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);
    
    crearMatriz(filas, columnas);
    llenarSelects(filas, columnas);
});

function crearMatriz(filas, columnas){
    const matriz = document.getElementById("matriz");
    matriz.innerHTML = "";
    for(let i = 0; i < columnas; i++) {
        matriz.innerHTML += "<br>";  
        for(let j = 0; j < filas; j++) {
            const randomValue = Math.floor(Math.random() * 100);
            matriz.innerHTML += `<input type="number" id="celda-${i}-${j}" value="${randomValue}" readonly> `;
        }
    }
}
function llenarSelects(filas , columnas){
    const selectFilas = document.getElementById("selectFilas");
    const selectColumnas = document.getElementById("selectColumnas");
    selectFilas.innerHTML = "";
    selectColumnas.innerHTML = "";
    for(let i = 0; i < filas; i++) {
        selectFilas.innerHTML += `<option value="${i}">${i}</option>`;
    }
    for(let i = 0; i < columnas; i++) {
        selectColumnas.innerHTML += `<option value="${i}">${i}</option>`;
    }
}

document.getElementById("mostrarValor").addEventListener('click', function() {
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);
    const selectFilas = parseInt(document.getElementById("selectFilas").value);
    const selectColumnas = parseInt(document.getElementById("selectColumnas").value);
    const celda = document.getElementById(`celda-${selectColumnas}-${selectFilas}`);
    const valor = document.getElementById("valor");
    valor.innerHTML = `El valor de la celda seleccionada es: ${celda.value}`;
});