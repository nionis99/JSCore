import Shipment from "./Shipment";

export interface Shipper {
    getCost(weight: number): number;
}

export class AirEastShipper implements Shipper {
    static LETTER_CHARGE = .39;
    static PACKAGE_CHARGE = .25;

    getCost(weight: number) {
        let cost = weight * AirEastShipper.PACKAGE_CHARGE;
        if (weight <= Shipment.LETTER_SIZE) return weight * AirEastShipper.LETTER_CHARGE;
        if (weight > Shipment.OVERSIZE) cost += 10;
        return cost;
    }
}

export class ChicagoSprintShipper implements Shipper {
    static LETTER_CHARGE = .42;
    static PACKAGE_CHARGE = .20;

    getCost(weight: number) {
        return weight <= 15
            ? weight * ChicagoSprintShipper.LETTER_CHARGE
            : weight * ChicagoSprintShipper.PACKAGE_CHARGE;
    }
}

export class PacificParcelShipper implements Shipper {
    static LETTER_CHARGE = .51;
    static PACKAGE_CHARGE = .19;
    static OVERSIZE_CHARGE = .02;

    getCost(weight: number): number {
        let cost = weight * PacificParcelShipper.PACKAGE_CHARGE;
        if (weight <= Shipment.LETTER_SIZE) return weight * PacificParcelShipper.LETTER_CHARGE;
        if (weight > Shipment.OVERSIZE) cost += (weight - Shipment.OVERSIZE) * PacificParcelShipper.OVERSIZE_CHARGE;
        return cost;
    }
}