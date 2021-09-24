import {CurrencyController} from './controllers/currency.controller';
import {CurrencyService} from './services/currency.service';
import {CurrencyView} from './views/currency.view';
import './style.css';

const app = new CurrencyController(new CurrencyService(), new CurrencyView());