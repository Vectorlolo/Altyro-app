import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.scss'],
})
export class EntregaComponent implements OnInit {

  @Input() entrega: any;
  show = false;
  constructor() { }
  ngOnInit() {}

}
