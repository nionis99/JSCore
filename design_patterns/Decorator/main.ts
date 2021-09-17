import {
    DoNotLeaveShipmentDecorator, FragileShipmentDecorator, Letter,
    Oversize, Package, ReturnReceiptShipmentDecorator, State
} from "./Shipment";
import {Client, Gui} from "./Client";

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

let letterShipment = new Letter(state1);
let packageShipment = new Package(state2);
let oversizeShipment = new Oversize(state3);
// @ts-ignore
packageShipment = new FragileShipmentDecorator(packageShipment);
// @ts-ignore
packageShipment = new DoNotLeaveShipmentDecorator(packageShipment);
// @ts-ignore
packageShipment = new ReturnReceiptShipmentDecorator(packageShipment);
const client = new Client(GuiMock);

client.gui.on('onShipment', (shipment) => console.log(`Client uses gui: ${shipment}`));
client.gui.trigger('onShipment', letterShipment);
client.gui.trigger('onShipment', packageShipment);
client.gui.trigger('onShipment', oversizeShipment);