import Item from "./Item";
import Pages from "./Pages";

export default class Book extends Item {
    private author: string;

    constructor(title: string, author: string, pages: Pages) {
        super(title, pages);
        this.author = author;
    }

    toString(): string {
        return `Book: ${this.getTitle()} by ${this.author} with number of pages: ${this.pages.pages.length}, ${this.pages.pages.toString()}`;
    }
}