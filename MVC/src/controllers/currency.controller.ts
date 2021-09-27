import {CurrencyConverter, CurrencyType} from '../models/currency.model';
import {CurrencyView} from '../views/currency.view';

async function getCurrenciesData() {
    const response = await fetch('currencies.json');
    return await response.json();
}

export class CurrencyConverterController {
    currencyModel: CurrencyConverter;
    currencyView: CurrencyView;

    constructor() {
        this.currencyModel = new CurrencyConverter()
        this.currencyView = new CurrencyView(this);
    }

    async firstRender() {
        const primaryCurrencies = await getCurrenciesData();
        this.currencyModel.setCurrencies(primaryCurrencies);
        this.render();
    }

    convertFromEuro(index: number, euroValue: number) {
        this.currencyModel.convertFromEuro(index, euroValue);
        this.render();
    }

    convertToEuro(index: number, currencyValue: number) {
        this.currencyModel.convertToEuro(index, currencyValue);
        this.render();
    }


    render() {
        const currencies: CurrencyType[] = this.currencyModel.getCurrencies();
        this.currencyView.render(currencies);
    }
}