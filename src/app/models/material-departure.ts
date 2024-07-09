import { Motive } from "./motive";
import { Storage } from "./storage";
import { User } from "./user";

export class MaterialDeparture {
    materialDepartureId: number=0;
    description: string='';
    quantity: number=0;
    price: number=0;
    status: boolean=true;
    user: User = new User();
    motive: Motive = new Motive();
    storage: Storage = new Storage();
}
