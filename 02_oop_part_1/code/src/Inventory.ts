import {Item} from "./Item";
import {ItemComparator} from "./ItemComparator";

export default class Inventory {
    private items: Array<Item> = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    sort(comparator?: ItemComparator): void {
        this.items.sort(comparator ? comparator.compare : undefined);
    }

    toString(): string {
        return this.items.join(', ').toString();
    }
}
