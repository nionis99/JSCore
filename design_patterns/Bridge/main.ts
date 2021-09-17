import {State} from "./Shipment";
import {Client, Gui} from "./Client";
import {Letter, Oversize, Package} from "./Shipments";

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

const shipment1 = new Letter(state1);
const shipment2 = new Package(state2);
const shipment3 = new Oversize(state3);
const client = new Client(GuiMock);

client.gui.on('onShipment', (shipment) => console.log(`Client uses gui: ${shipment}`));
client.gui.trigger('onShipment', shipment1);
client.gui.trigger('onShipment', shipment2);
client.gui.trigger('onShipment', shipment3);