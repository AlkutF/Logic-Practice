/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    // Retorna una nueva función que acepta los argumentos necesarios para `fn`.
    return async function(...args) {
        // Variable para almacenar el identificador del timeout.
        let timeoutId;

        // Crea una promesa que ejecuta `fn` y limpia el timeout si se resuelve a tiempo.
        const fnPromise = new Promise(async (resolve, reject) => {
            try {
                // Ejecuta la función `fn` con los argumentos proporcionados y resuelve.
                const result = await fn(...args);
                clearTimeout(timeoutId); // Limpia el timeout si `fn` se completa a tiempo.
                resolve(result);
            } catch (error) {
                // Rechaza si `fn` lanza un error.
                clearTimeout(timeoutId); // Limpia el timeout si ocurre un error en `fn`.
                reject(error);
            }
        });

        // Crea la promesa del timeout que rechaza después de `t` milisegundos.
        const timeoutPromise = new Promise((_, reject) => {
            timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t);
        });

        // Usa Promise.race para devolver el resultado de `fn` o rechazar si se excede el tiempo.
        return Promise.race([fnPromise, timeoutPromise]);
    };
};
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */