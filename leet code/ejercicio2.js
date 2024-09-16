/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

// Crear el contador
const counter = createCounter(3);

// Probar el contador
console.log(counter()); // 3
console.log(counter()); // 4
console.log(counter()); // 5
