import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEntregadoComponent } from './modal-entregado/modal-entregado.component';
import { ModalNoEntregadoComponent } from './modal-no-entregado/modal-no-entregado.component';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.scss'],
})
export class EntregaComponent implements OnInit {

  @Input() entrega: any;
  show = false;
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ModalNoEntregadoComponent);
  }
  openModal() {
    this.dialog.open(ModalEntregadoComponent);
  }

  ngOnInit() {}

}
