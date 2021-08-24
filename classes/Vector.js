function Vector(values) {
    this.values = values;

    function isEquals(vector) {
        return vector.values.length === values.length
    }

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
        toString: () => values.toString(),
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
