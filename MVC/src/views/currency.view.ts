import {Currency} from '../models/currency.model';

export class CurrencyView {
    private app: HTMLElement;
    private form: HTMLElement;
    private title: HTMLElement;
    private currencyList: HTMLElement;

    constructor() {
        this.app = this.getElement('#root');
        this.form = this.createElement('form');
        this.title = this.createElement('h1');
        this.title.textContent = 'Currencies';
        this.currencyList = this.createElement('ul', 'currency-list');
        this.app.append(this.title, this.form);
    }

    createElement(tag: string, className?: string) {
        const element = document.createElement(tag);

        if (className) element.classList.add(className);

        return element;
    }

    getElement(selector: string): HTMLElement {
        return document.querySelector(selector);
    }

    displayCurrencies(currencies: Currency[]) {
        if (currencies.length === 0) {
            const p = this.createElement('p');
            p.textContent = 'No currencies.';
            this.currencyList.append(p);
        } else {
            currencies.forEach(currency => {
                const container = this.createElement('p');
                container.id = currency.id;
                const label = this.createElement('label');
                label.innerText = currency.name;

                const euroInput = this.createElement('input') as HTMLInputElement;
                euroInput.type = 'number';
                euroInput.value = "1";

                const currencyInput = this.createElement('input') as HTMLInputElement;
                currencyInput.type = 'number';
                currencyInput.value = `${currency.rate * parseInt(euroInput.value)}`;

                const deleteButton = this.createElement('button', 'delete');
                deleteButton.textContent = 'Delete';
                container.append(label, euroInput, currencyInput);

                this.currencyList.append(container);
                this.form.append(this.currencyList);
            });
        }
    }
}