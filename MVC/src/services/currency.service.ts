import {Currency, CurrencyDto} from '../models/currency.model';
import fakeData from '../utils/currencies';

export class CurrencyService {
    public currencies: Currency[];
    private displayPrimaryCurrencies: Function;

    constructor() {
        const currencies: CurrencyDto[] = fakeData.currencies || [];
        this.currencies = currencies.map(currency => new Currency(currency));
    }

    init(callback: Function) {
        this.displayPrimaryCurrencies = callback;
    }
}