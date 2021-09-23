import {Currency} from '../models/currency.model';
import {CurrencyService} from '../services/currency.service';
import {CurrencyView} from '../views/currency.view';

export class CurrencyController {
    constructor(private currencyService: CurrencyService, private currencyView: CurrencyView) {
        this.currencyService.init(this.displayCurrencies);

        // Init
        this.displayCurrencies(this.currencyService.currencies);
    }

    displayCurrencies = (currencies: Currency[]) => {
        this.currencyView.displayCurrencies(currencies);
    };
}