    /**
    * @param {number[]} arr
    * @param {Function} fn
    * @return {number[]}
    */
    var filter = function(arr, fn) {
        let resultado = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i)) {
                resultado.push(arr[i]);
            }
        }
        return resultado; 
    };
