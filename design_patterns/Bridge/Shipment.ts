import {AirEastShipper, ChicagoSprintShipper, PacificParcelShipper, Shipper} from "./Shipper";

export interface State {
    shipmentId: number;
    toAddress: string;
    fromAddress: string;
    toZipCode: string[5];
    fromZipCode: string[5];
    weight: number;
    marks?: string[]
}

let ID = 0;

export default class Shipment {
    static LETTER_SIZE = 15;
    static OVERSIZE = 160;
    private state: State;
    private shipper: Shipper; // Strategy

    constructor(state: State) {
        const shipperSource = parseInt(state.fromZipCode[0]);
        this.state = {...state, shipmentId: this.getShipmentId()};
        if (shipperSource > 4 && shipperSource < 7) {
            this.setShipper(new ChicagoSprintShipper())
        } else if (shipperSource > 7) {
            this.setShipper(new PacificParcelShipper())
        } else {
            this.setShipper(new AirEastShipper())
        }
    }

    setShipper(shipper: Shipper) { // Set strategy
        this.shipper = shipper;
    }

    getCost(weight: number) {
        return this.shipper.getCost(weight);
    }

    getShipmentId() {
        return ID++;
    }

    ship() {
        const {shipmentId, fromZipCode, fromAddress, toZipCode, toAddress, weight} = this.state;
        const pickedFrom = fromAddress + ' ' + fromZipCode;
        const shippedTo = toAddress + ' ' + toZipCode;
        return `Shipment with the ID ${shipmentId} will be picked up from ${pickedFrom}` +
            ` and shipped to ${shippedTo} \nCost = ${this.getCost(weight)}`;
    }
}
