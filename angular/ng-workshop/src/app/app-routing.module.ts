import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceConfigComponent } from './service-config/service-config.component';

const appRoutes: Routes = [
	{ path: "config", component: ServiceConfigComponent }
	//, { path: "config/:id", component: ServiceConfigComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
