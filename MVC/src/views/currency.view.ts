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
        this.title.textContent = 'Currency converter';
        this.currencyList = this.createElement('ul', 'currency-list');
        this.form.append(this.currencyList);
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
                euroInput.id = currency.id;
                euroInput.value = `${100}`;
                euroLabel.innerText = `Euro`;

                const currencyLabel = this.createElement('label') as HTMLInputElement;
                currencyLabel.innerText = currency.name;

                const currencyInput = this.createElement('input') as HTMLInputElement;
                currencyInput.type = 'number';
                currencyInput.name = currency.id;
                currencyInput.disabled = true;
                currencyInput.value = (currency.rate * parseFloat(euroInput.value)).toFixed(2);

                currencyInfoContainer.append(euroLabel, euroInput, currencyLabel, currencyInput);

                this.currencyList.append(rateInfoContainer, currencyInfoContainer);
            });
            this.currencyList.addEventListener('change', (event) => {
                const el = (event.target as HTMLInputElement);
                const currencyResult = this.getElement(`input[name="${el.id}"]`) as HTMLInputElement;
                const currencyRate = parseFloat(this.getElement(`.currency-rate-${el.id}`).innerText);
                currencyResult.value = `${(parseFloat(el.value) * currencyRate).toFixed(2)}`;
            })
        }
    }
}