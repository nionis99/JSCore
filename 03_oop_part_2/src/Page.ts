interface PageFactory {
    pageNumber: number;
    pageType: string;
    pageMaterial: string;

    toString(): void;
}

export default class Page implements PageFactory {
    pageNumber: number;
    pageType: string;
    pageMaterial: string;

    constructor(pageNumber: number, pageType: string, pageMaterial: string) {
        this.pageNumber = pageNumber;
        this.pageType = pageType;
        this.pageMaterial = pageMaterial;
    }

    toString() {
        return `here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`
    }
}