import {CurrencyType, ICurrencyModel} from '../models/currency.model';
import {CurrencyView} from '../views/currency.view';

// @Event listener
export class CurrencyConverterController {
    currencyModel: ICurrencyModel;
    currencyView: CurrencyView;

    constructor(model: ICurrencyModel, view: CurrencyView) {
        this.currencyModel = model;
        this.currencyView = view;
    }

    async firstRender() {
        this.currencyModel.getCurrenciesData();
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