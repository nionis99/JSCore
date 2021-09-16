import Shipment, {State} from "./Shipment";

class Gui {
    protected events: object;

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

        this.events[eventType].forEach((callback) => callback(state.ship())); // Calling instant ship
    }
}

// Don't know how these two would relate.
class Client {
    constructor(gui: Gui) {
    }

    private onShip(shipment: Shipment) {

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

// But this looks like something now.
const GuiMock = new Gui();
GuiMock.on('onShip', (ship) => console.log(ship)); // using callback
const shipment1 = new Shipment(state);
const shipment2 = new Shipment(state);

//Shipment with the ID 0 will be picked up from 92021 12292 4th Ave SE, Bellevue, Waand shipped to 67721 1313 Mockingbird Lane, Tulsa, OK
// Cost = 9.36
GuiMock.trigger('onShip', shipment1);
//Shipment with the ID 1 will be picked up from 92021 12292 4th Ave SE, Bellevue, Waand shipped to 67721 1313 Mockingbird Lane, Tulsa, OK
// Cost = 9.36
GuiMock.trigger('onShip', shipment2);
GuiMock.trigger('onShip', shipment2);