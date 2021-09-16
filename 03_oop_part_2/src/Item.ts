import Pages from "./Pages";

export default abstract class Item {
    pages: Pages;
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

    [Symbol.iterator]() {
        let pointer = 0;
        let components = this.pages.pages;
        let that = this;

        return {
            next(): IteratorResult<Item> {
                if (pointer < components.length) {
                    pointer++;
                    return {
                        done: false,
                        value: that
                    }
                } else {
                    return {
                        done: true,
                        value: null
                    }
                }
            }
        }
    }

    abstract toString(): string;
}