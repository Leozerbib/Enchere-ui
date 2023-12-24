import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './view/--App/-User/user-page/user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './view/logic/register/register.component';
import { LoginComponent } from './view/logic/login/LoginComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './view/--App/-Game/game.component';
import { BlocTeamComponent } from './view/--App/-Team/bloc-team/bloc-team.component';
import { TeamComponent } from './view/--App/-Team/team/team.component';
import { NgbActiveModal, NgbAlertModule, NgbModal, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { UserCardComponent } from './view/--App/-User/user-card/user-card.component';
import { UserListComponent } from './view/--App/-User/user-list/user-list.component';
import { UserComponent } from './view/--App/-User/user.component';
import { UserServiceService } from './---Services/user-service.service';
import { HomeComponent } from './view/logic/home/home.component';
import { ContactComponent } from './view/logic/contact/contact.component';
import { AboutComponent } from './view/logic/about/about.component';
import { NotFoundComponent } from './view/logic/not-found/not-found.component';
import { MailComponent } from './view/logic/contact/mail/mail.component';
import { MappingComponent } from './view/logic/contact/mapping/mapping.component';
import { WebsiteComponent } from './view/logic/contact/website/website.component';
import { UserModule } from './view/--App/-User/-user.module';
import { LoginTeamComponent } from './view/logic/login-team/login-team.component';
import { RegisterTeamComponent } from './view/logic/register-team/register-team.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModalModule



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    GameComponent,
    BlocTeamComponent,
    TeamComponent,
    UserCardComponent,
    UserListComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent,
    MailComponent,
    MappingComponent,
    WebsiteComponent,
    LoginTeamComponent,
    RegisterTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModalModule,
  
    
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
