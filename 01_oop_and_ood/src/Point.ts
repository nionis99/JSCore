export class Point {
    private readonly x: number;
    private readonly y: number;

    constructor();
    constructor(firstValue?: number | Point, secondValue?: number) {
        this.x = firstValue instanceof Point ? firstValue.x : firstValue || 0;
        this.y = firstValue instanceof Point ? firstValue.y : secondValue || 0;
    };

    toString() {
        return `(${this.x}, ${this.y})`;
    }

    distance(firstValue?: number | Point, secondValue?: number) {
        if (firstValue instanceof Point) return this.calculateDistance(this.x - firstValue.x, this.y - firstValue.y);
        if (secondValue) return this.calculateDistance(this.x - firstValue, this.y - secondValue);
        return this.calculateDistance(this.x, this.y);
    }

    calculateDistance(xLength: number, yLength: number) {
        return parseFloat(Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2)).toFixed(2));
    }
}

