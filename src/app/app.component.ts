import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Retiros', url: '/retiro', icon: 'store-alt' },
    { title: 'Entregas', url: '/folder/Entregas', icon: 'truck' },
    { title: 'Informes', url: '/folder/Informes', icon: 'chart-bar' },
    { title: 'Mensajes', url: '/folder/Mensajes', icon: 'envelope' },
    { title: 'Configuración', url: '/folder/Configuración', icon: 'cog' ,cog:true},

  ];
  constructor() {}
}
