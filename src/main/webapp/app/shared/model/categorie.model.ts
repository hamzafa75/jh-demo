export interface ICategorie {
  id?: number;
  nom?: string;
}

export class Categorie implements ICategorie {
  constructor(public id?: number, public nom?: string) {}
}
