import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Retiros', url: '/folder/Inbox', icon: 'store-alt' },
    { title: 'Entregas', url: '/folder/Outbox', icon: 'truck' },
    { title: 'Informes', url: '/folder/Favorites', icon: 'chart-bar' },
    { title: 'Mensajes', url: '/folder/Archived', icon: 'envelope' },
    { title: 'Configuración', url: '/folder/Archived', icon: 'cog' ,cog:true},

  ];
  constructor() {}
}
