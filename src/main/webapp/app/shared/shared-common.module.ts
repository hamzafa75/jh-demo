import { NgModule } from '@angular/core';

import { JhDemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhDemoSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhDemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhDemoSharedCommonModule {}
