import {Point} from "./Point";

export abstract class Shape {
    protected points: Point[];
    protected color?: string;
    protected isFilled?: boolean;

    constructor(points: Point[]);
    constructor(points: Point[], color?: string, isFilled?: boolean) {
        if (points.length >= 3) {
            this.color = color || "green";
            this.isFilled = isFilled !== undefined ? isFilled : true;
            this.points = points
        } else {
            throw new Error("Shape must have 3 points at least")
        }
    }

    public toString() {
        return `A Shape with color of ${this.color} and ${this.isFilled ? 'filled' : 'not filled'}. Points: ${this.points.join(', ').toString()}.`;
    }

    public getPerimeter() {
        let perimeter = 0;
        this.points.forEach((point, index, points) => {
            const distance = point.distance(points[index + 1 != points.length ? index + 1 : 0])
            perimeter += distance;
        });
        return perimeter;
    }

    abstract getType(): string;
}
