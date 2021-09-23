import Shipment, {State} from "./Shipment";

interface IEvents {
    [key: string]: Array<(state: Shipment) => void>
}

class Gui {
    protected events: IEvents;

    constructor() {
        this.events = {};
    }

    on(eventType: string, callback: (state: Shipment) => void) {
        if (!this.events[eventType]) this.events[eventType] = [];

        this.events[eventType].push(callback);
    }

    trigger(eventType: string, state: Shipment) {
        if (!this.events[eventType]) {
            throw new Error(`Can't trriger an event. Event "${eventType}" doesn't exits.`);
        }

        this.events[eventType].forEach((callback) => callback(state));
    }
}

class Client {
    gui: Gui;

    constructor(gui: Gui) {
        this.gui = gui;
    }

    private onShip(shipment: Shipment) {
        return this.gui.trigger('onShip', shipment);
    }
}

const state: State = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "92021",
    weight: 24
}

const GuiMock = new Gui();

const shipment1 = new Shipment(state);
const shipment2 = new Shipment(state);
const shipment3 = new Shipment(state);
const client = new Client(GuiMock);
client.gui.on('onShipment', (shipment) => console.log(`Client uses gui: ${shipment.ship()}`));
client.gui.trigger('onShipment', shipment3);

GuiMock.on('onShip', (ship) => console.log(ship.ship())); // using callback
//Shipment with the ID 0 will be picked up from 92021 12292 4th Ave SE, Bellevue, Waand shipped to 67721 1313 Mockingbird Lane, Tulsa, OK
// Cost = 9.36
GuiMock.trigger('onShip', shipment1);
//Shipment with the ID 1 will be picked up from 92021 12292 4th Ave SE, Bellevue, Waand shipped to 67721 1313 Mockingbird Lane, Tulsa, OK
// Cost = 9.36
GuiMock.trigger('onShip', shipment2);
// Throw
// GuiMock.trigger('onShip2', shipment2);