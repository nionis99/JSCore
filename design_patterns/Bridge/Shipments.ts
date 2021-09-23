import Shipment, {State} from "./Shipment";
import {Shipper} from "./Shipper";

class Letter extends Shipment {
}

class Package extends Shipment {
}

class Oversize extends Shipment {
}

export interface AbstractShipmentFactory {
    createLetter: (state: State, shipper: Shipper) => Shipment;
    createPackage: (state: State, shipper: Shipper) => Shipment;
    createOversize: (state: State, shipper: Shipper) => Shipment;
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