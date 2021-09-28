import {Subscriber} from "../views/currency.view";

export interface CurrencyType {
    id: number;
    name: string;
    rate: number;
    euroValue: number;
    currencyValue: number;
}

export interface Publisher {
    subscribe(subscriber: Subscriber): void;

    unsubscribe(subscriber: Subscriber): void;

    notify(currencies: CurrencyType[], inputType: string): void;
}

export interface ICurrencyModel {
    setInputType(inputType: string): void;

    setCurrencies(currencies: CurrencyType[]): void;

    getCurrencies(): CurrencyType[];

    convertFromEuroIndependant(index: number, euroValue: number): void;

    convertToEuroIndependant(index: number, currencyValue: number): void;

    convertFromEuroValues(euroValue: number): void;

    convertToEuroValues(currencyValue: number): void;

    getCurrenciesData(): void;
}

export class CurrencyModel implements ICurrencyModel, Publisher {
    currencies: CurrencyType[];
    subscribers: Subscriber[] = [];
    inputType: string = 'number';

    subscribe(subscriber: Subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber: Subscriber) {
        this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    }

    notify(currencies: CurrencyType[], inputType: string): void {
        this.subscribers.forEach((subscriber) => subscriber.render(currencies, inputType));
    }

    setInputType(inputType: string) {
        this.inputType = inputType;
        this.notify(this.currencies, inputType);
    }

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
        this.notify(this.currencies, this.inputType);
    }

    convertFromEuroIndependant(index: number, euroValue: number): void {
        this.currencies[index].euroValue = euroValue;
        this.currencies[index].currencyValue = parseFloat((euroValue * this.currencies[index].rate).toFixed(2));
        this.notify(this.currencies, this.inputType);
    }

    convertToEuroIndependant(index: number, currencyValue: number): void {
        this.currencies[index].currencyValue = currencyValue;
        this.currencies[index].euroValue = parseFloat((currencyValue / this.currencies[index].rate).toFixed(2));
        this.notify(this.currencies, this.inputType);
    }

    convertFromEuroValues(euroValue: number): void {
        this.currencies.forEach((currency) => {
            currency.euroValue = euroValue;
            currency.currencyValue = parseFloat((euroValue * currency.rate).toFixed(2));
        })
        this.notify(this.currencies, this.inputType);
    }

    convertToEuroValues(currencyValue: number): void {
        this.currencies.forEach((currency) => {
            currency.currencyValue = currencyValue;
            currency.euroValue = parseFloat((currencyValue / currency.rate).toFixed(2));
        })
        this.notify(this.currencies, this.inputType);
    }
}
