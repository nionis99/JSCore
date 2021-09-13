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
        this.id = id === 0 ? id : id + 1;
        this.name = name;
        this.value = value;
        this.weight = weight;
        counter++;
        id += 1;
    }

    getId(): number {
        return this.id;
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
            return this.name.toLowerCase() > other.name.toLowerCase() ? 1 : -1
        }
    }

    toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`
    }

    static reset(): void {
        counter = 0;
    }
}
