import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  titulo: string;
  detalles: string;
  constructor() { 

    this.titulo = 'Contactanos!';
    this.detalles = `¿Listo para comenzar tu proyecto o resolver
tu problema con nosotros? Llámanos o escríbenos y nos prondremos en contacto contigo a la brevedad.`;
  }

  ngOnInit() {
  }

}
