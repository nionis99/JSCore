import {Item} from "./Item";

export default abstract class Consumable extends Item {
    private spoiled: boolean;
    private consumed: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this.spoiled = spoiled;
        this.consumed = false;
    }

    use() {
        if (this.consumed) return `There is nothing left of the ${this.getName()} to consume.`;
        if (!this.spoiled && !this.consumed) return this.eat();
    }

    isConsumed(): boolean {
        return this.consumed;
    }

    setConsumed(consumed: boolean) {
        this.consumed = consumed;
    }

    isSpoiled() {
        return this.spoiled;
    }

    toString(): string {
        return super.toString();
    }

    abstract eat(): void;
}