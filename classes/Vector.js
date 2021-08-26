function Vector(values) {
    this.values = values;

    function calculate(fn) {
        return values.map(fn);
    }

    function throwError(){
        throw new Error("Vectors are not the same length")
    }

    function checkCompatibility(vector, fn) {
        return vector.values.length === values.length ? calculate(fn) : throwError();
    }

    return {
        add: (vector) => checkCompatibility(vector, (num, id) => num + vector.values[id]),
        substract: (vector) => checkCompatibility(vector, (num, id) => num - vector.values[id]),
        dot: (vector) => checkCompatibility(vector, (num, id) => num * vector.values[id]),
        norm: (fixedNumbers) => Math.sqrt(values.reduce((sum, a) => sum + Math.pow(a, 2), 0)).toFixed(fixedNumbers),
        equals: (vector) => values.toString() === vector.values.toString(),
        toString: () => `(${values.toString()})`,
        get values() {
            return values;
        },
    }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const b2 = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(b.equals(b2));
console.log(b.equals(a));
console.log(a.toString());
console.log(a.add(b));
console.log(a.substract(b));
console.log(a.dot(b));
console.log(a.norm(2));
console.log(a.add(c));
