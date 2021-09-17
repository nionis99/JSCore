export interface Shipper {
    getCost(weight: number): number;
}

export class AirEastShipper implements Shipper {
    static CHARGE = 0.39;

    getCost(weight: number) {
        return weight * AirEastShipper.CHARGE;
    }
}

export class ChicagoSprintShipper implements Shipper {
    static CHARGE = 0.42;

    getCost(weight: number) {
        return weight * ChicagoSprintShipper.CHARGE;
    }
}

export class PacificParcelShipper implements Shipper {
    static CHARGE = 0.51;

    getCost(weight: number): number {
        return weight * PacificParcelShipper.CHARGE;
    }
}