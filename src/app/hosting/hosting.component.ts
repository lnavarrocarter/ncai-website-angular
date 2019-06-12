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
        "plan" : "hosting 1",
        "detalles" : "detalles de hosting",
        "hidden" : true
      },
      {
        "plan" : "hosting 2", 
        "detalles" : "detalles de hosting",
        "hidden" : true
      },
      {
        "plan" : "hosting 3",
        "detalles" : "detalles de hosting",
        "hidden" : true
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
