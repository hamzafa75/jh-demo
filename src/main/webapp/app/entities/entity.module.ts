import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'produit',
        loadChildren: './produit/produit.module#JhDemoProduitModule'
      },
      {
        path: 'categorie',
        loadChildren: './categorie/categorie.module#JhDemoCategorieModule'
      },
      {
        path: 'commande',
        loadChildren: './commande/commande.module#JhDemoCommandeModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhDemoEntityModule {}
