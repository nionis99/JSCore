import Pages from "./Pages";
import Page from "./Page";

export default abstract class Item implements Iterable<Page> {
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

    [Symbol.iterator]() {
        let pointer = 0;
        let components = this.pages.pages;
        return {

            next(): IteratorResult<Page> {
                if (pointer < components.length) {
                    return {
                        done: false,
                        value: components[pointer++]
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