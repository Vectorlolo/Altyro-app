import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { RetirosComponent } from './retiros/retiros.component';
import { RetiroComponent } from './retiros/retiro/retiro.component';
import { EntregaComponent } from './entregas/entrega/entrega.component';
import { ModalNoEntregadoComponent } from './entregas/entrega/modal-no-entregado/modal-no-entregado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RetirosComponent,
    RetiroComponent
  ],
  entryComponents: [ModalNoEntregadoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FontAwesomeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
		library.addIconPacks(fas, fab, far);
	}
}
