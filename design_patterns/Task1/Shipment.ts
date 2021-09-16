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
    static WEIGHT_PRICE_RATE = 0.39;
    private state: State;

    constructor(state: State) {
        const uuid = this.getShipmentId();
        this.state = {...state, shipmentId: uuid};
    }

    getShipmentId() {
        return ID++;
    }

    ship() {
        const {shipmentId, fromZipCode, fromAddress, toZipCode, toAddress, weight} = this.state;
        const pickedFrom = fromZipCode + ' ' + fromAddress;
        const shippedTo = toZipCode + ' ' + toAddress
        return `Shipment with the ID ${shipmentId} will be picked up from ${pickedFrom}` +
            `and shipped to ${shippedTo} \nCost = ${weight * Shipment.WEIGHT_PRICE_RATE}`;
    }
}
