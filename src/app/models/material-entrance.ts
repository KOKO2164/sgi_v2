import { Motive } from "./motive";
import { Storage } from "./storage";
import { User } from "./user";

export class MaterialEntrance {
    materialEntranceId: number=0;
    description: string='';
    quantity: number=0;
    price: string='';
    status: boolean=true;
    user: User = new User();
    motive: Motive = new Motive();
    storage: Storage = new Storage();
}
