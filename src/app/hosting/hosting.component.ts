import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent implements OnInit {

  hosting: Array<any>;
  sensitive : number = 0;
  constructor() {

    this.hosting = [
      {
        "plan" : "Ncai Empresa",
        "detalles" : "Perfecto para tu empresa, este servidor te proporciona ambiente Cpanel para alojar tu web con la tecnología que necesites, cuenta con casillas de correo electronico y ftp con ancho ilimitado para tus clientes.",
        "hidden" : false,
        "caracteristicas" : ["2GB Espacio de Disco","20 Casillas de Correo","4 Cuentas FTP", "5 Bases de Datos","2 Subdominios","Sin Accesso SSH","Sin IP Única","Cpanel"],
        "valor" : "$20.000",
        "periodo" : "Por Año",
        "icon" : "ni ni-check-bold",
        "color" : ["icon-shape-primary","text-primary", "badge-primary"]
      },
      {
        "plan" : "Ncai Desarrollador", 
        "detalles" : "Eres desarrollador, pues este plan es perfecto para ti, te permite tener todos los dominios que quieras para tus clientes y ademas puedes administrar tus planes personalizados como quieras incluye WHM",
        "hidden" : true,
        "caracteristicas" : ["20GB Espacio de Disco","Ilimitadas Casillas de Correo","ilimitadas Cuentas FTP", "Ilimitadas Bases de Datos","Ilimitados Subdominios","Sin Accesso SSH","Con Ip Única","Cpanel y WHM"],
        "valor" : "$65.000",
        "periodo" : "Por Año",
        "icon" : "ni ni-favourite-28",
        "color" : ["icon-shape-success","text-success", "badge-success"]
      },
      {
        "plan" : "Ncai Premium",
        "detalles" : "Si tienes una aplicacion de alto rendimiento tenemos el plan perfecto para ti un VPS habilidatada para aplicaciones de alto rendimiento, sin limites de transferencia de datos y respaldo incluidos.",
        "hidden" : true,
        "caracteristicas" : ["Personalizado Espacio de Disco","Personalizado Procesador","Personalizado Ancho de Banda", "Personalizado SO","Libre de Dominio","Con Accesso SSH","Mas de una IP","Linux, Windows"],
        "valor" : "Cotizar",
        "periodo" : "Mensual",
        "icon" : "ni ni-button-power",
        "color" : ["icon-shape-danger","text-danger", "badge-danger"]
      }
    ]

    setInterval(() => {
      this.temporizador();
    },4000)
   }

  ngOnInit() {
  }


  private temporizador(){
    this.hosting.forEach((element, index) => {
      element.hidden = true;
      if(this.sensitive == index){
          element.hidden = false;
      }
    });
    if((this.sensitive+1) == this.hosting.length){
      this.sensitive = 0
    }else{
      this.sensitive = this.sensitive + 1;
    }
  }
}
