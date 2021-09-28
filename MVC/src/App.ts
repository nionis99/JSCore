import {CurrencyConverterController} from './controllers/currency.controller';
import {CurrencyModel} from "./models/currency.model";
import {CurrencyView} from './views/currency.view';
import './style.css';


const model = new CurrencyModel();
const view = new CurrencyView();
model.subscribe(view);

const controller = new CurrencyConverterController(model, view);

export default controller;