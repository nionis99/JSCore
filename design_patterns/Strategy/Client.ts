import Shipment from "./Shipment";

interface IEvents {
    [key: string]: Array<(state: Shipment) => void>
}

export class Gui {
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

export class Client {
    gui: Gui;

    constructor(gui: Gui) {
        this.gui = gui;
    }

    private onShip(shipment: Shipment) {
        return this.gui.trigger('onShip', shipment);
    }
}