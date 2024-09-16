/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let n = init; // Definir 'n' basado en 'init'
    return {
        increment: () => {
            return ++n;  // Pre-incremento para devolver el valor actualizado
        },
        decrement: () => {
            return --n;  // Pre-decremento para devolver el valor actualizado
        },
        reset: () => {
            n = init;   // Restablece 'n' al valor inicial
            return n;
        }
    };
};


const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4

