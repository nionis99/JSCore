import Page from "./Page";

export default class Pages {
    pages: Page[];
    currentPage: Page | undefined;

    constructor(pages: Page[]) {
        this.pages = pages;
    }

    setCurrentPage(currentPage: Page | undefined) {
        this.currentPage = currentPage;
    }

    getCurrentPage() {
        return this.currentPage;
    }
}