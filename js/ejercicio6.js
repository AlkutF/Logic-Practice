let vectorPrincipal = [];
        let primos = [];
        let compuestos = [];

        // Evento para generar los inputs
        document.getElementById("crearInputs").addEventListener('click', function() {
            const numerodeVectores = parseInt(document.getElementById("vectorInput").value);  
            const vectores = document.getElementById("vectores");
            vectores.innerHTML = ""; 
            for (let i = 0; i < numerodeVectores; i++) {
                vectores.innerHTML += `<input type='number' name='vector[]' placeholder='Valor ${i + 1}' required><br>`;
            }
            document.getElementById("submitButton").style.display = "inline-block";
        });

        document.getElementById("numerodeVectores").addEventListener('submit', function(e) {
            e.preventDefault();
            const containerVector = document.getElementById("original");
            const containerPrimos = document.getElementById("primos");
            const containerCompuestos = document.getElementById("compuestos");
            // Obtener los valores ingresados en los inputs
            let formData = new FormData(this);
            vectorPrincipal = formData.getAll('vector[]').map(Number); // Convertir a números
            containerVector.innerHTML="Los valores del vector original son " + vectorPrincipal;
            primos = [];
            compuestos = [];
            vectorPrincipal.forEach(num => {
                if (esPrimo(num)) {
                    primos.push(num);
                } else if (num > 1) {
                    compuestos.push(num);
                }
            });
            containerPrimos.innerHTML="Los valores primos del vector son "+primos;
            containerCompuestos.innerHTML="Los valores compuestos del vector son "+compuestos;
        });

        function esPrimo(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }