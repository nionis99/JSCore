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

    convertFromEuro(euroValue: number, index?: number) {
        if (index !== undefined) this.currencyModel.convertFromEuroIndependant(index, euroValue);
        else this.currencyModel.convertFromEuroValues(euroValue)
        this.render();
    }

    convertToEuro(currencyValue: number, index?: number) {
        if (index !== undefined) this.currencyModel.convertToEuroIndependant(index, currencyValue);
        else this.currencyModel.convertToEuroValues(currencyValue);
        this.render();
    }

    render() {
        const currencies: CurrencyType[] = this.currencyModel.getCurrencies();
        const inputType = this.currencyView.getInputType();
        this.currencyView.render(currencies, inputType);
    }
}