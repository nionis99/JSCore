import Pages from "./Pages";

abstract class BaseItem {
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

    abstract toString(): string;
}

type Constructor<T = {}> = new (...args: any[]) => T;

function PagesIterable<TBase extends Constructor<BaseItem>>(Base: TBase) {
    return class Iterable extends Base {
        [Symbol.iterator]() {
            let pointer = 0;
            let components = this.pages.pages;
            let that = this;

            return {
                next(): IteratorResult<BaseItem> {
                    if (pointer < components.length) {
                        that.pages.setCurrentPage(components[pointer]);
                        pointer += 1;
                        return {done: false, value: that};
                    }
                    that.pages.setCurrentPage(undefined);
                    return {done: true, value: null};
                }
            }
        };

        toString() {
            return `${this.constructor.name}: `;
        }
    }
}

// @ts-ignore Iterable mixin
const Item = PagesIterable<BaseItem>(BaseItem);

export default Item;