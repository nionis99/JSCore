import Shipment, {
    AbstractShipmentFactory,
    DoNotLeaveShipmentDecorator, FragileShipmentDecorator, ReturnReceiptShipmentDecorator, ShipmentFactory, State
} from "./Shipment";
import {Client, Gui} from "./Client";
import {AirEastShipper, ChicagoSprintShipper, PacificParcelShipper, Shipper} from "./Shipper";

function createShipper(fromZipCode: string) {
    const shipperSource = parseInt(fromZipCode[0]);
    if (shipperSource > 4 && shipperSource < 7) {
        return new ChicagoSprintShipper();
    } else if (shipperSource > 7) {
        return new PacificParcelShipper()
    } else {
        return new AirEastShipper()
    }
}

function createShipment(factory: AbstractShipmentFactory, state: State, shipper: Shipper) {
    if (state.weight <= 15) {
        return factory.createLetter(state, shipper);
    }
    if (state.weight <= 160) {
        return factory.createPackage(state, shipper);
    }
    return factory.createOversize(state, shipper);
}

const shipmentFactory = new ShipmentFactory();

const state1: State = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "92021",
    weight: 14
}

const state2: State = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "12021",
    weight: 150
}

const state3: State = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "52021",
    weight: 240
}

const GuiMock = new Gui();
const shipper1: Shipper = createShipper(state1.fromZipCode);
let shipment1: Shipment = createShipment(shipmentFactory, state1, shipper1);
const shipper2: Shipper = createShipper(state2.fromZipCode);
const shipment2: Shipment = createShipment(shipmentFactory, state1, shipper2);
const shipper3: Shipper = createShipper(state3.fromZipCode);
const shipment3: Shipment = createShipment(shipmentFactory, state1, shipper3);
// @ts-ignore
shipment1 = new FragileShipmentDecorator(shipment1);
// @ts-ignore
shipment1 = new DoNotLeaveShipmentDecorator(shipment1);
// @ts-ignore
shipment1 = new ReturnReceiptShipmentDecorator(shipment1);
const client = new Client(GuiMock);

client.gui.on('onShipment', (shipment) => console.log(`Client uses gui: ${shipment.ship()}`));
client.gui.trigger('onShipment', shipment1);
client.gui.trigger('onShipment', shipment2);
client.gui.trigger('onShipment', shipment3);