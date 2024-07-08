import { Motive } from "./motive";
import { User } from "./user";

export class MaterialExit {
  materialExitId: number=0;
  description: string='';
  quantity: number=0;
  price: string='';
  status: boolean=true;
  user: User = new User();
  motive: Motive = new Motive();
}
