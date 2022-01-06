/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.page.html',
  styleUrls: ['./entregas.page.scss'],
})
export class EntregasPage implements OnInit {
  retiros = [
    {
      title:'SPACCIO TERRANOVA',
      encargado:'Daniela Terranova',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'951111555554',
      telefonoSecndario:'951111555554',
      santiago:25,
      regiones:5
    },
    {
      title:'BLOOM TO GIVE',
      encargado:'Daniela Terranova',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'951111555554',
      telefonoSecndario:'951111555554',
      santiago:25,
      regiones:5
    },
    {
      title:'STORE MQ DUCK',
      encargado:'Daniela Terranova',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'951111555554',
      telefonoSecndario:'951111555554',
      santiago:25,
      regiones:5
    },
    {
      title:'MENGUANTE',
      encargado:'Daniela Terranova',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'951111555554',
      telefonoSecndario:'951111555554',
      santiago:25,
      regiones:5
    },
    {
      title:'TIENDA AURORA',
      encargado:'Daniela Terranova',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'951111555554',
      telefonoSecndario:'951111555554',
      santiago:25,
      regiones:5
    },
    {
      title:'GRESHA STYLE',
      encargado:'Daniela Terranova',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'951111555554',
      telefonoSecndario:'951111555554',
      santiago:25,
      regiones:5
    },
    {
      title:'NATURELL CHILE',
      encargado:'Daniela Terranova',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'951111555554',
      telefonoSecndario:'951111555554',
      santiago:25,
      regiones:5
    },
    {
      title:'MY CUTR PUSSY',
      encargado:'Daniela Terranova',
      direccion:'EL UNIVERSO 7486, CERRILLOS',
      depto:'TORRE A',
      telefono:'951111555554',
      telefonoSecndario:'951111555554',
      santiago:25,
      regiones:5
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
