import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


import { MainComponent } from './main/main.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ServicesComponent } from './services/services.component';
import { HostingComponent } from './hosting/hosting.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';

import { HomeComponent } from './home.component';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule.forRoot(),
    ],
    declarations: [ 
        HomeComponent,
        HostingComponent,
        MainComponent,
        MainLayoutComponent,
        ServicesComponent,
        HostingComponent,
        ProjectsComponent,
        ContactComponent,
        TeamComponent,
        HomeComponent
    ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
