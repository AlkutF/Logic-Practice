/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map(); 

    return function(...args) {
        // Convertimos los argumentos en una clave para el caché
        const key = JSON.stringify(args);
        
        // Si el resultado ya está en caché, lo retornamos
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Calculamos el resultado y lo almacenamos en caché
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *   callCount += 1;
 *   return a + b;
 * });
 * memoizedFn(2, 3); // 5
 * memoizedFn(2, 3); // 5
 * console.log(callCount); // 1
 */
