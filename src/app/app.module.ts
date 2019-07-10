import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ServicesComponent } from './services/services.component';
import { HostingComponent } from './hosting/hosting.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    MainLayoutComponent,
    ServicesComponent,
    HostingComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
