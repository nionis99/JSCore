import Item from "./Item";
import Pages from "./Pages";

export default class Comics extends Item {
    private author: string;
    private artist: string;

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super(title, pages);
        this.author = author;
        this.artist = artist;
    }

    toString(): string {
        return `Comics: ${this.getTitle()} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.pages.length}, ${this.pages.pages[0].toString()}`;
    }
}