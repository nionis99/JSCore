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
    private state: State;
    private shipper: Shipper;

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

    setShipper(shipper: Shipper) {
        this.shipper = shipper;
    }

    // The context delegates some work to the strategy object
    // instead of implementing multiple versions of the
    // algorithm on its own.
    getCost(weight: number) {
        return this.shipper.getCost(weight);
    }


    getShipmentId() {
        return ID++;
    }

    ship() {
        const {shipmentId, fromZipCode, fromAddress, toZipCode, toAddress, weight} = this.state;
        return `Shipment with the ID ${shipmentId} will be picked up from ${fromAddress} ` +
            `${fromZipCode} and shipped to ${toAddress} ${toZipCode}\nCost = ${this.getCost(weight)}`;
    }
}

