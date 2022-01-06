import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.scss'],
})
export class RetiroComponent implements OnInit {

  @Input() retiro: any;
  show = false;
  constructor() { }
  ngOnInit() {}

}
