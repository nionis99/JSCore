import {Item} from "./Item";
import {ItemComparator} from "./ItemComparator";

export default class Inventory {
    private items: Array<Item> = [];

    constructor() {
    }

    addItem(item: Item): void {
        this.items.push(item);
    }

    sort(comparator?: ItemComparator) {
        this.items.sort(comparator ? comparator.compare : undefined);
    }

    toString(): string {
        return this.items.join(', ').toString();
    }
}
