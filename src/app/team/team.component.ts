import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team: Array<any>;
  
  constructor() {
    this.team = [
      {
        name : 'Luis Navarro',
        description : 'Desarrollador Full Stack',
        photo : 'assets/img/team/nacho2.jpg',
        linkedin: '#',
        facebook : '#',

      },
      {
        name : 'Nelson Carvajal',
        description : 'Diseñador UI/UX',
        photo : 'assets/img/team/nelson.jpg',
        linkedin: '#',
        facebook : '#',

      },
      {
        name : 'Matias Navarro',
        description : 'Desarrollador Back-End',
        photo : 'assets/img/team/mati.jpg',
        linkedin: '#',
        facebook : '#',

      }
    ]
  }
  
  ngOnInit() {
  }
  
}
