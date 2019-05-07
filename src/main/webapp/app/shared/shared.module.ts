import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhDemoSharedLibsModule, JhDemoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhDemoSharedLibsModule, JhDemoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhDemoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhDemoSharedModule {
  static forRoot() {
    return {
      ngModule: JhDemoSharedModule
    };
  }
}
