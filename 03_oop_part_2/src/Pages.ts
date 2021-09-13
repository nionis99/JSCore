import Page from "./Page";

export default class Pages implements Iterable<Page> {
    private pages: Page[];

    constructor(pages: Page[]) {
        this.pages = pages;
    }

    [Symbol.iterator]() {
        let pointer = 0;
        let components = this.pages;

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
}