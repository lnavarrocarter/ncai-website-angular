import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  frases: string;
  constructor() { 
    this.frases = "“La tecnología por sí sola no basta. También tenemos que poner el corazón” – Jane Goodall"

    const arrayfrases = [
      "“Si piensas que la tecnología puede solucionar tus problemas de seguridad, está claro que ni entiendes los problemas ni entiendes la tecnología”    –  Bruce Schneier",
      "“Las personas siempre le temen al cambio. Le temían a la electricidad cuando fue inventada, ¿no es así?”.  – Bill Gates",
      "“La clave del éxito en los negocios esta en detectar  hacia dónde va el mundo y llegar ahí primero”.  – Bill Gates",
    ]
  }

  ngOnInit() {
  }

}
