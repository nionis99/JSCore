import Item from "./Item";
import Pages from "./Pages";

export default class Magazine extends Item {
    constructor(title: string, pages: Pages) {
        super(title, pages);
    }

    toString(): string {
        return `Magazine: ${this.getTitle()} with number of pages: ${this.pages.pages.length}, here is page ${this.pages.getCurrentPage()?.pageType} #${this.pages.getCurrentPage()?.pageNumber} and it\'s material is ${this.pages.getCurrentPage()?.pageMaterial}`;
    }

}
