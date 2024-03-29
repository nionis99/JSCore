import Item from "./Item";
import Pages from "./Pages";

export default class Magazine extends Item {
    constructor(title: string, pages: Pages) {
        super(title, pages);
    }

    toString(): string {
        return `${this.constructor.name}: ${this.getTitle()} with number of pages: ${this.pages.pages.length}, ${super.toString()}`;
    }

}
