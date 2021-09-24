import {Shipper} from "./Shipper";

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
        this.state = {...state, shipmentId: this.getShipmentId()};
    }

    setShipper(shipper: Shipper) {
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
        return `Shipment with the ID ${shipmentId} will be picked up from ${fromAddress} ` +
            `${fromZipCode} and shipped to ${toAddress} ${toZipCode}\nCost = ${this.getCost(weight)}`;
    }
}

