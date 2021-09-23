import Shipment, {State} from "./Shipment";
import {Client, Gui} from "./Client";
import {AirEastShipper, ChicagoSprintShipper, PacificParcelShipper} from "./Shipper";

const state1: State = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "92021",
    weight: 24
}

const state2: State = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "12021",
    weight: 24
}

const state3: State = {
    shipmentId: 0,
    toAddress: "1313 Mockingbird Lane, Tulsa, OK",
    fromAddress: "12292 4th Ave SE, Bellevue, Wa",
    toZipCode: "67721",
    fromZipCode: "52021",
    weight: 24
}

function defineStrategy(fromZipCode: string) {
    const shipperSource = parseInt(fromZipCode[0]);
    if (shipperSource > 4 && shipperSource < 7) {
        return new ChicagoSprintShipper();
    } else if (shipperSource > 7) {
        return new PacificParcelShipper()
    } else {
        return new AirEastShipper()
    }
}

const GuiMock = new Gui();
const shipment1 = new Shipment(state1);
shipment1.setShipper(defineStrategy(state1.fromZipCode))
const shipment2 = new Shipment(state2);
shipment2.setShipper(defineStrategy(state2.fromZipCode))
const shipment3 = new Shipment(state3);
shipment3.setShipper(defineStrategy(state3.fromZipCode))
const client = new Client(GuiMock);

client.gui.on('onShipment', (shipment) => console.log(`Client uses gui: ${shipment.ship()}`));
client.gui.trigger('onShipment', shipment3);

GuiMock.on('onShip', (ship) => console.log(ship)); // using callback
//Shipment with the ID 0 will be picked up from 92021 12292 4th Ave SE, Bellevue, Waand shipped to 67721 1313 Mockingbird Lane, Tulsa, OK
// Cost = 9.36
GuiMock.trigger('onShip', shipment1);
//Shipment with the ID 1 will be picked up from 92021 12292 4th Ave SE, Bellevue, Waand shipped to 67721 1313 Mockingbird Lane, Tulsa, OK
// Cost = 9.36
GuiMock.trigger('onShip', shipment2);
// Throw
// GuiMock.trigger('onShip2', shipment2);