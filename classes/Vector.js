function Vector(values) {
    this.values = values;

    // I would name the method ```isLengthsEqual``` because you are comparing lengths of the vectors.
    function isEquals(vector) {
        return vector.values.length === values.length
    }

    // Could you please separate this function into 2: checkCompatibility and calculate to follow by single responsibility principle (https://en.wikipedia.org/wiki/Single-responsibility_principle)
    // Additionally the initial letter shoul be in lowercase for usual functions.
    function CheckAndCalculate(vector, fn) {
        if (isEquals(vector)) {
            return values.map(fn)
        } else {
            throw new Error("Vectors are not the same length");
        }
    }

    return {
        add: (vector) => CheckAndCalculate(vector, (num, id) => num + vector.values[id]),
        substract: (vector) => CheckAndCalculate(vector, (num, id) => num - vector.values[id]),
        dot: (vector) => CheckAndCalculate(vector, (num, id) => num * vector.values[id]),
        norm: (fixedNumbers) => Math.sqrt(values.reduce((sum, a) => sum + Math.pow(a, 2), 0)).toFixed(fixedNumbers),
        toString: () => values.toString(), // ```toString``` method should return string in the pattern like this: '(1,2,3)'
        get values() {
            return values;
        },
    }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.toString());
console.log(a.add(b));
console.log(a.substract(b));
console.log(a.dot(b));
console.log(a.norm(2));
console.log(a.add(c));
