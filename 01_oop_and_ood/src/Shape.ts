import {Point} from "./Point";

export abstract class Shape {
    protected points: Point[];
    protected color?: string;
    protected isFilled?: boolean;

    constructor(points: Point[]);
    constructor(points: Point[], color: string = 'green', isFilled: boolean = true) {
        if (points.length < 3) {
            throw new Error("Shape must have 3 points at least")
        }
        this.color = color;
        this.isFilled = isFilled;
        this.points = points;
    }

    toString() {
        return `A Shape with color of ${this.color} and ${this.isFilled ? 'filled' : 'not filled'}. Points: ${this.points.join(', ').toString()}.`;
    }

    getPerimeter() {
        return this.getDistances().reduce((sum, value) => sum + value);
    }

    getDistances() {
        let distances: number[] = [];
        this.points.forEach((point, index, points) => {
            const distance = point.distance(points[index + 1 != points.length ? index + 1 : 0])
            distances.push(distance);
        });
        return distances;
    }

    abstract getType(): string;
}
