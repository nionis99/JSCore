export interface CurrencyType {
    id: number;
    name: string;
    rate: number;
    euroValue: number;
    currencyValue: number;
}

export interface ICurrencyModel {
    setCurrencies(currencies: CurrencyType[]): void;

    getCurrencies(): CurrencyType[];

    convertFromEuroIndependant(index: number, euroValue: number): void;

    convertToEuroIndependant(index: number, currencyValue: number): void;

    convertFromEuroValues(euroValue: number): void;

    convertToEuroValues(currencyValue: number): void;

    getCurrenciesData(): void;
}

// @Observable
export class CurrencyModel implements ICurrencyModel {
    currencies: CurrencyType[]

    setCurrencies(currencies: CurrencyType[]) {
        this.currencies = currencies;
    }

    getCurrencies(): CurrencyType[] {
        return this.currencies;
    }

    async getCurrenciesData() {
        const response = await fetch('currencies.json');
        const primaryCurrenciesData = await response.json();
        this.setCurrencies(primaryCurrenciesData);
    }

    convertFromEuroIndependant(index: number, euroValue: number): void {
        this.currencies[index].euroValue = euroValue;
        this.currencies[index].currencyValue = parseFloat((euroValue * this.currencies[index].rate).toFixed(2));
    }

    convertToEuroIndependant(index: number, currencyValue: number): void {
        this.currencies[index].currencyValue = currencyValue;
        this.currencies[index].euroValue = parseFloat((currencyValue / this.currencies[index].rate).toFixed(2));
    }

    convertFromEuroValues(euroValue: number): void {
        this.currencies.forEach((currency) => {
            currency.euroValue = euroValue;
            currency.currencyValue = parseFloat((euroValue * currency.rate).toFixed(2));
        })
    }

    convertToEuroValues(currencyValue: number): void {
        this.currencies.forEach((currency) => {
            currency.currencyValue = currencyValue;
            currency.euroValue = parseFloat((currencyValue / currency.rate).toFixed(2));
        })
    }
}
