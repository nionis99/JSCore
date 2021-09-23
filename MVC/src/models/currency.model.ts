export interface CurrencyDto {
    name: string;
    rate: number;
}

export class Currency {
    public id: string;
    public name: string;
    public rate: number;

    constructor(
        {name, rate}: CurrencyDto = {
            name: null,
            rate: null
        }
    ) {
        this.id = this.uuidv4();
        this.name = name;
        this.rate = rate;
    }

    uuidv4(): string {
        return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
            /[018]/g,
            (c: number) =>
                (
                    c ^
                    (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
                ).toString(16)
        );
    }
}