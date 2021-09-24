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

interface IShipment {
    ship(): string;
}


export default class Shipment implements IShipment {
    static LETTER_SIZE = 15;
    static OVERSIZE = 160;
    private state: State;
    protected shipper: Shipper;

    constructor(state: State, shipper: Shipper) {
        this.state = {...state, shipmentId: this.getShipmentId()};
        this.shipper = shipper;
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

export class ShipmentDecorator implements IShipment {
    protected shipment: IShipment;

    constructor(shipment: IShipment) {
        this.shipment = shipment;
    }

    public ship(): string {
        return this.shipment.ship();
    }

}

export class FragileShipmentDecorator extends ShipmentDecorator {
    public ship() {
        return this.shipment.ship() + '\n**MARK FRAGILE**';
    }
}

export class DoNotLeaveShipmentDecorator extends ShipmentDecorator {
    public ship() {
        return this.shipment.ship() + '\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**';
    }
}

export class ReturnReceiptShipmentDecorator extends ShipmentDecorator {
    public ship() {
        return this.shipment.ship() + '\n**MARK RETURN RECEIPT REQUESTED**';
    }
};

export interface AbstractShipmentFactory {
    createLetter: (state: State, shipper: Shipper) => Shipment;
    createPackage: (state: State, shipper: Shipper) => Shipment;
    createOversize: (state: State, shipper: Shipper) => Shipment;
}

class Letter extends Shipment {
}

class Package extends Shipment {
}

class Oversize extends Shipment {
}

export class ShipmentFactory implements AbstractShipmentFactory {
    createLetter(state: State, shipper: Shipper): Shipment {
        return new Letter(state, shipper);
    }

    createPackage(state: State, shipper: Shipper): Shipment {
        return new Package(state, shipper);
    }

    createOversize(state: State, shipper: Shipper): Shipment {
        return new Oversize(state, shipper);
    }
}



