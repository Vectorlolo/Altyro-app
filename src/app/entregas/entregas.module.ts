import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregasPageRoutingModule } from './entregas-routing.module';

import { EntregasPage } from './entregas.page';
import { EntregaComponent } from './entrega/entrega.component';
import { ModalNoEntregadoComponent } from './entrega/modal-no-entregado/modal-no-entregado.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregasPageRoutingModule,
    MatDialogModule
  ],
  declarations: [
    EntregasPage,
    EntregaComponent,
    ModalNoEntregadoComponent,
  ],
  entryComponents: [ModalNoEntregadoComponent],
})
export class EntregasPageModule {}
