document.getElementById("ejercicio5").addEventListener('submit', function(e) {
    e.preventDefault();
    const columnas = document.getElementById('columnas').value;
    const filas = document.getElementById('filas').value;
    const matriz = document.getElementById('matriz');
    const eliminar = document.getElementById(`eliminar`);
    matriz.innerHTML = "";

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement('div');
        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement('input');
            celda.type = 'text'; 
            celda.classList.add('celda');
            fila.appendChild(celda);
        }
        matriz.appendChild(fila);
    }
    eliminar.style.display = "flex";
    
});

function eliminarRepetidos() {
    const celdas = document.querySelectorAll('.celda');
    const valores = [];
    celdas.forEach(celda => {
        valores.push(celda.value);
    });

    // Lógica para eliminar valores repetidos
    for (let i = 0; i < valores.length; i++) {
        for (let j = i + 1; j < valores.length; j++) {
            if (valores[i] === valores[j] && valores[i] !== "") {
                valores[j] = '';  
            }
        }
    }

    celdas.forEach((celda, index) => {
        celda.value = valores[index];
    });
}