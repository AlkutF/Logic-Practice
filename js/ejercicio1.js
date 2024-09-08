document.getElementById("ejercicio1").addEventListener('submit', function(e) {
    e.preventDefault();  
    
    const nombre = document.getElementById("nombre").value.trim();
    const materia = document.getElementById("materia").value;
    const notas = document.getElementById("notas").value.split(",").map(nota => parseFloat(nota.trim()));
    
    if (nombre && materia && notas.length > 0) {
        const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
        
        let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];
        alumnos.push({ nombre, materia, promedio });
        localStorage.setItem("alumnos", JSON.stringify(alumnos));
        
        mostrarListado(materia);
    } else {
        alert("Por favor, complete todos los campos.");
    }
});

document.getElementById("cargarPromedios").addEventListener('click', function() {
    const materiaFiltro = document.getElementById("materiaFiltro").value;
    mostrarListado(materiaFiltro);
});

function mostrarListado(materia) {
    const alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];
    const filtrados = alumnos.filter(alumno => alumno.materia === materia);
    filtrados.sort((a, b) => b.promedio + a.promedio);
    const listado = document.getElementById("listado");
    listado.innerHTML = "<ul>" + filtrados.map(alumno => `<li>${alumno.nombre}: ${alumno.promedio.toFixed(2)}</li>`).join("") + "</ul>";
}
