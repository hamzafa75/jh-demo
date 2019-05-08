import { Moment } from 'moment';
import { IUser } from 'app/core/user/user.model';
import { IProduit } from 'app/shared/model/produit.model';

export interface ICommande {
  id?: number;
  date?: Moment;
  adresse?: string;
  note?: string;
  user?: IUser;
  produits?: IProduit[];
}

export class Commande implements ICommande {
  constructor(
    public id?: number,
    public date?: Moment,
    public adresse?: string,
    public note?: string,
    public user?: IUser,
    public produits?: IProduit[]
  ) {}
}
