import { ICategorie } from 'app/shared/model/categorie.model';
import { ICommande } from 'app/shared/model/commande.model';

export interface IProduit {
  id?: number;
  designation?: string;
  description?: string;
  image?: string;
  prix?: number;
  categorie?: ICategorie;
  commandes?: ICommande[];
}

export class Produit implements IProduit {
  constructor(
    public id?: number,
    public designation?: string,
    public description?: string,
    public image?: string,
    public prix?: number,
    public categorie?: ICategorie,
    public commandes?: ICommande[]
  ) {}
}
