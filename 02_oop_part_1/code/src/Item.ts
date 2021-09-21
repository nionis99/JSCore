import {Comparable} from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
    private static numberOfItems = counter;
    private id: number;
    private name: string;
    private value: number;
    private weight: number;

    constructor(name: string, value: number, weight: number) {
        counter += 1;
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.id = counter - 1;
    }

    getId(): number {
        return this.id;
    }

    static getNumberOfItems(): number {
        return counter;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }


    getValue(): number {
        return this.value;
    }

    setValue(price: number) {
        this.value = price;
    }


    getWeight(): number {
        return this.weight;
    }

    setWeight(weight: number) {
        this.weight = weight;
    }


    compareTo(other: Item): number {
        if (this.value > other.value) return 1;
        if (this.value < other.value) return -1;
        if (this.value === other.value) {
            if (this.name.toLowerCase() > other.name.toLowerCase()) return 1;
            if (this.name.toLowerCase() < other.name.toLowerCase()) return -1;
            return 0;
        }
    }

    toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`
    }

    static reset(): void {
        counter = 0;
    }

    abstract use(): void;
}
