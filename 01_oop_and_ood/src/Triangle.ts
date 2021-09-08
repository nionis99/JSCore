import {Shape} from './Shape';

export class Triangle extends Shape {
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
