import {CurrencyConverterController} from "../controllers/currency.controller";
import {CurrencyType} from "../models/currency.model";

export class CurrencyView {
    private app: HTMLElement;
    private form: HTMLElement;
    private title: HTMLElement;
    private currencyList: HTMLElement;

    constructor(controller: CurrencyConverterController) {
        this.app = this.getElement('#root');
        this.form = this.createElement('form');
        this.title = this.createElement('h1');
        this.title.textContent = 'Currency converter';
        this.currencyList = this.createElement('ul', 'currency-list');

        this.currencyList.addEventListener('change', (event) => {
            const el = (event.target as HTMLInputElement);
            const index = parseInt(el.parentElement.id);
            if (el.name === 'euro') controller.convertFromEuro(index, parseInt(el.value));
            else controller.convertToEuro(index, parseInt(el.value));
        })

        this.form.append(this.currencyList);
        this.app.append(this.title, this.form);
        controller.firstRender();
    }

    createElement(tag: string, className?: string) {
        const element = document.createElement(tag);

        if (className) element.classList.add(className);

        return element;
    }

    getElement(selector: string): HTMLElement {
        return document.querySelector(selector);
    }

    render(currencies: CurrencyType[]) {
        this.currencyList.innerHTML = '';
        if (currencies.length === 0) {
            const p = this.createElement('p');
            p.textContent = 'No currencies.';
            this.currencyList.append(p);
        } else {
            currencies.forEach((currency, index) => {
                const currencyTitle = this.createElement('p', 'currency-title');
                currencyTitle.innerText = currency.name;

                const currencyInfoContainer = this.createElement('p', 'currency-converter');
                const rateInfoContainer = this.createElement('p');

                const label = this.createElement('label');
                label.innerText = `1 Euro is`;

                const rateValue = this.createElement('span', `currency-rate-${currency.id}`) as HTMLInputElement;
                rateValue.innerText = currency.rate.toString();

                rateInfoContainer.append(currencyTitle, label, rateValue, currency.name);

                const euroLabel = this.createElement('label') as HTMLInputElement;
                const euroInput = this.createElement('input') as HTMLInputElement;
                euroInput.type = 'number';
                euroInput.name = 'euro';
                euroInput.value = `${currency.euroValue}`;
                euroLabel.innerText = `Euro`;

                const currencyLabel = this.createElement('label') as HTMLInputElement;
                currencyLabel.innerText = currency.name;

                const currencyInput = this.createElement('input') as HTMLInputElement;
                currencyInput.name = 'currency'
                currencyInput.type = 'number';
                currencyInput.value = `${currency.currencyValue}`;

                currencyInfoContainer.append(euroLabel, euroInput, currencyLabel, currencyInput);
                currencyInfoContainer.id = `${index}`;

                this.currencyList.append(rateInfoContainer, currencyInfoContainer);
            });
        }
    }
}