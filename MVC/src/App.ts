import {CurrencyConverterController} from './controllers/currency.controller';
import {CurrencyModel} from "./models/currency.model";
import {CurrencyView} from './views/currency.view';
import './style.css';

new CurrencyConverterController(new CurrencyModel());