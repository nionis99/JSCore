import Shipment from "./Shipment";

export class Gui {
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

// Might be wrong
export class Client {
    gui: Gui;

    constructor(gui: Gui) {
        this.gui = gui;
    }

    private onShip(shipment: Shipment) {
        return this.gui.trigger('onShip', shipment);
    }
}