import {Shape} from './Shape';
import {Point} from "./Point";

export class Triangle extends Shape {
    constructor(points: Point[]);
    constructor(points: Point[], color?: string, isFilled?: boolean);
    constructor(...props) {
        super(props);
    }

    toString(): string {
        return `Triangle[${this.points.map((point, index) => 'v' + (index + 1) + "=" + point.toString())}]`;
    }

    isEquilateral() {
        return this.getDistances().every(distance => distance === this.getDistances()[0]);
    }

    isScalene() {
        return (new Set(this.getDistances())).size === this.getDistances().length;
    }

    getType(): string {
        if (this.isEquilateral()) return "equilateral triangle";
        if (this.isScalene()) return "scalene triangle";

        return "isosceles triangle";
    }

}
