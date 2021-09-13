export class Point {
    private readonly x: number;
    private readonly y: number;

    constructor();
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    };

    toString() {
        return `(${this.x}, ${this.y})`;
    }

    distance(): number;
    distance(other: Point): number;
    distance(firstValue?: number | Point, secondValue?: number): number {
        if (firstValue instanceof Point) return this.calculateDistance(this.x - firstValue.x, this.y - firstValue.y);
        if (secondValue) return this.calculateDistance(this.x - firstValue, this.y - secondValue);
        return this.calculateDistance(this.x, this.y);
    }

    calculateDistance(xLength: number, yLength: number) {
        return parseFloat(Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2)).toFixed(2));
    }
}

