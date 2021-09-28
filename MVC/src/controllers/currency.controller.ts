import {ICurrencyModel} from '../models/currency.model';
import {CurrencyView} from '../views/currency.view';

export class CurrencyConverterController {
    currencyModel: ICurrencyModel;
    currencyView: CurrencyView;

    constructor(model: ICurrencyModel, view: CurrencyView) {
        this.currencyModel = model;
        this.currencyView = view;
        this.firstRender();
    }

    async firstRender() {
        await this.currencyModel.getCurrenciesData();
    }

    convertFromEuro(euroValue: number, index?: number) {
        if (index !== undefined) this.currencyModel.convertFromEuroIndependant(index, euroValue);
        else this.currencyModel.convertFromEuroValues(euroValue)
    }

    convertToEuro(currencyValue: number, index?: number) {
        if (index !== undefined) this.currencyModel.convertToEuroIndependant(index, currencyValue);
        else this.currencyModel.convertToEuroValues(currencyValue);
    }

    changeInputType() {
        const inputType = this.currencyView.getInputType();
        this.currencyModel.setInputType(inputType);
    }
}