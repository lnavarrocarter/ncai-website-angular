import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  
  servicesName: string;
  servicesDetails: string;
  services: Array<any>;

  constructor() {

    this

    // working to fontAwesome, more info: https://fontawesome.com/icons?d=gallery&q=movil
    this.servicesName = '¿Por Somos tan geniales?';
    this.servicesDetails = 'Siempre estamos muy interesados en escuchar nuevas ideas y proyectos. ¡Nuestra pasión es transformar ideas en realidad! Así que no te preocupes: revisa nuestros servicios y elige el que mas se adapte a lo que necesitas';
    this.services = [
      {
        name : "Web Dinámicas",
        description : "¿Quieres una página web que haga algo más que mostrar información? Nosotros diseñamos y desarrollamos tu página web, para ajustarla a tu medida y así puedas interactuar con tus clientes.",
        icon : "fa-laptop-code"
      },
      {
        name : "Aplicaciones Personalizadas",
        description : "¿Necesitas un sistema para administrar tu negocio? ¿Tienes una idea genial y necesitas una app móvil para hacerla realidad? Solicita una reunión con nuestro departamento de proyectos y haz realidad esa idea en tu cabeza junto a nosotros.",
        icon : "fa-mobile-alt"
      },
      {
        name : "Hosting & VPS",
        description : "Necesitas Alojar tu aplicacion con altos rendimientos, o tu pagina web de manera rapida y sencilla? pues nosotros te cotizamos y asesoramos con una disponibilidad 24/7/365",
        icon : "fa-server"
      }
    ]
   }

  ngOnInit() {
  }

}
