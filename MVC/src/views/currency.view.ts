import {CurrencyConverterController} from "../controllers/currency.controller";
import {CurrencyType} from "../models/currency.model";

// Observer
export class CurrencyView {
    private app: HTMLElement;
    private choices: HTMLElement;
    private form: HTMLElement;
    private title: HTMLElement;
    private currencyList: HTMLElement;

    constructor(controller: CurrencyConverterController) {
        this.app = this.getElement('#root');
        this.choices = this.createElement('p');
        this.form = this.createElement('form');
        this.title = this.createElement('h1');
        this.title.textContent = 'Currency converter';
        this.currencyList = this.createElement('ul', 'currency-list');
        this.initEventListeners(controller);
        this.createChoices();
        this.form.append(this.currencyList);
        this.app.append(this.title, this.choices, this.form);
        controller.firstRender();
    }

    createElement(tag: string, className?: string) {
        const element = document.createElement(tag);

        if (className) element.classList.add(className);

        return element;
    }

    createInput(value: string, type: string, name: string, min?: string, max?: string) {
        const inputEl = this.createElement('input') as HTMLInputElement;
        if (['range', 'number'].includes(type)) inputEl.step = "0.05";
        if (min) inputEl.min = min;
        if (max) inputEl.max = max;
        inputEl.name = name;
        inputEl.value = value
        inputEl.type = type;
        return inputEl;
    }

    getElement(selector: string): HTMLElement {
        return document.querySelector(selector);
    }

    createChoices() {
        const numberLabel = this.createElement('label');
        numberLabel.innerText = 'number input type';
        const numberChoice = this.createInput('number', 'radio', 'inputType');
        numberChoice.checked = true;
        const rangeLabel = this.createElement('label');
        rangeLabel.innerText = 'range input type';
        const rangeChoice = this.createInput('range', 'radio', 'inputType');

        const indepandantInputsChoice = this.createElement('p');
        indepandantInputsChoice.innerText = 'Is independant?';
        const independantCheckbox = this.createInput("true", 'checkbox', 'isIndependant');
        indepandantInputsChoice.append(independantCheckbox);

        this.choices.append(numberLabel, numberChoice, rangeLabel, rangeChoice, indepandantInputsChoice);
    }

    getInputType() {
        return (this.getElement('input[name="inputType"]:checked') as HTMLInputElement).value;
    }

    initEventListeners(controller: CurrencyConverterController) {
        this.currencyList.addEventListener('change', (event) => {
            const isIndependant = !!(this.getElement('input[name="isIndependant"]:checked') as HTMLInputElement);
            const el = (event.target as HTMLInputElement);
            const index = isIndependant ? parseInt(el.parentElement.id) : undefined;
            if (el.name === 'euro') controller.convertFromEuro(parseFloat(el.value), index);
            else controller.convertToEuro(parseFloat(el.value), index);
        });
        this.choices.addEventListener('change', () => controller.render());
    }

    render(currencies: CurrencyType[], inputType: string) {
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

                const rateValue = this.createElement('span', 'currency-rate');
                rateValue.innerText = currency.rate.toString();

                rateInfoContainer.append(currencyTitle, label, rateValue, currency.name);

                const euroLabel = this.createElement('label');
                const euroInput = this.createInput(currency.euroValue.toString(), inputType, 'euro', '1', '500');
                euroLabel.innerText = `Euro ${inputType === 'range' ? ': ' + currency.euroValue : ''}`;

                const currencyLabel = this.createElement('label');
                const currencyInput = this.createInput(currency.currencyValue.toString(), inputType, 'currency', '1', '10000');
                currencyLabel.innerText = `${currency.name} ${inputType === 'range' ? ': ' + currency.currencyValue : ''}`;

                currencyInfoContainer.append(euroLabel, euroInput, currencyLabel, currencyInput);
                currencyInfoContainer.id = `${index}`;

                this.currencyList.append(rateInfoContainer, currencyInfoContainer);
            });
        }
    }
}