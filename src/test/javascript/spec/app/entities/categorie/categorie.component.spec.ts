/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { JhDemoTestModule } from '../../../test.module';
import { CategorieComponent } from 'app/entities/categorie/categorie.component';
import { CategorieService } from 'app/entities/categorie/categorie.service';
import { Categorie } from 'app/shared/model/categorie.model';

describe('Component Tests', () => {
  describe('Categorie Management Component', () => {
    let comp: CategorieComponent;
    let fixture: ComponentFixture<CategorieComponent>;
    let service: CategorieService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhDemoTestModule],
        declarations: [CategorieComponent],
        providers: []
      })
        .overrideTemplate(CategorieComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CategorieComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CategorieService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Categorie(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.categories[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
