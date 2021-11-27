import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.scss'],
})
export class RetiroComponent implements OnInit {

  @Input() retiro
  constructor() { }
  show:boolean = false;

  ngOnInit() {}

}
