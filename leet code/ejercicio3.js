/**
 * @param {string|number} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
             return true;
           
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            return true;
            
        }
    };
};

try {
    console.log(expect(5).toBe(5));    // true
} catch (e) {
    console.error(e.message);          // No se mostrará error
}

try {
    console.log(expect(5).toBe(3));    // Error: "Not Equal"
} catch (e) {
    console.error(e.message);          // Se mostrará: "Not Equal"
}

try {
    console.log(expect(5).notToBe(3)); // true
} catch (e) {
    console.error(e.message);          // No se mostrará error
}

try {
    console.log(expect(5).notToBe(5)); // Error: "Equal"
} catch (e) {
    console.error(e.message);          // Se mostrará: "Equal"
}
