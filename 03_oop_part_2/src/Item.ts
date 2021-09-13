import Pages from "./Pages";

export default abstract class Item {
    private pages: Pages;
    private title: string;

    constructor(title: string, pages: Pages) {
        this.title = title;
        this.pages = pages;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    abstract toString(): string;
}