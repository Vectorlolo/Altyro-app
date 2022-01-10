/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.page.html',
  styleUrls: ['./entregas.page.scss'],
})
export class EntregasPage implements OnInit {
  entregas = [
    {
      title:'ANDREA BEAUTY LASH',
      subtitle:'Carolina Flores',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'95115554',
      tipopaquete:'ESTANDAR',
      tiposervicio:'CAMBIO',
    },
    {
      title:'BLOOM TO GIVE',
      subtitle:'Rocio Arana',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'95115554',
      tipopaquete:'ESTANDAR',
      tiposervicio:'CAMBIO',
    },
    {
      title:'CLARA STORE',
      subtitle:'Felipe Soto',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'95115554',
      tipopaquete:'ESTANDAR',
      tiposervicio:'CAMBIO',
    },
    {
      title:'MENGUANTE',
      subtitle:'Sofía Velez',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'95115554',
      tipopaquete:'ESTANDAR',
      tiposervicio:'CAMBIO',
    },
    {
      title:'ZOLDYCK CLOTHES',
      subtitle:'Ana María López',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'95115554',
      tipopaquete:'ESTANDAR',
      tiposervicio:'CAMBIO',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
