import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects : Array<any>;
  constructor() { 
    this.projects = [
      {
        "name" : "Geoportal 17",
        "descripcion_corta" : `Teramaps nos contactó para realizar el desarrollo de un aplicativo web para uno de sus clientes, 
        Sonacol. Estaban cambiandose de la API de Google Maps a la de Giscloud...`,
        "image" : "./assets/img/portfolio/fullsize/geportaltour.gif"
      },
      {
        "name" : "Rincon de Toledo",
        "descripcion_corta" : `Nos llamaron de Rincón de Toledo a principios de este año, e inmediatamente entendimos que estabamos 
        en una situación complicada. Su sitio web no funcionaba...`,
        "image" : "./assets/img/portfolio/fullsize/toledo.png"
      },
      {
        "name" : "Wadu App",
        "descripcion_corta" : `Mil Soluciones nos pidio desarrollar una app simulada a uber con geolocalizacion y peticiones en tiempo real
        fue un desafio interesante consiguiendo un resultado esperado por el cliente...`,
        "image" : "./assets/img/portfolio/fullsize/waduapp.png"
      },
      {
        "name" : "El oasis",
        "descripcion_corta" : `En 2015 se nos presentó el desafío de desarrollar un sitio web para El Oasis, una comunidad cristiana 
        universitaria ubicada en Ñuñoa. El sitio debía ser simple estilo (LandingPage) ...`,
        "image" : "./assets/img/portfolio/fullsize/oasis.png  "
      },
    ]

  }

  ngOnInit() {
  }

}
