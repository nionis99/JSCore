export interface CurrencyType {
    id: number;
    name: string;
    rate: number;
    euroValue: number;
    currencyValue: number;
}

export class CurrencyConverter {
    currencies: CurrencyType[]

    constructor() {
    }

    setCurrencies(currencies: CurrencyType[]) {
        this.currencies = currencies;
    }

    getCurrencies(): CurrencyType[] {
        return this.currencies;
    }

    convertFromEuro(index: number, euroValue: number): void {
        this.currencies[index].euroValue = euroValue;
        this.currencies[index].currencyValue = parseFloat((euroValue * this.currencies[index].rate).toFixed(2));
    }

    convertToEuro(index: number, currencyValue: number): void {
        this.currencies[index].currencyValue = currencyValue;
        this.currencies[index].euroValue = parseFloat((currencyValue / this.currencies[index].rate).toFixed(2));
    }
}
