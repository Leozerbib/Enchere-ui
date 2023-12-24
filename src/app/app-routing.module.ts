import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/logic/home/home.component';
import { ContactComponent } from './view/logic/contact/contact.component';
import { NotFoundComponent } from './view/logic/not-found/not-found.component';
import { AboutComponent } from './view/logic/about/about.component';
import { RegisterComponent } from './view/logic/register/register.component';
import { LoginComponent } from './view/logic/login/LoginComponent';
import { UserPageComponent } from './view/--App/-User/user-page/user-page.component';
import { MailComponent } from './view/logic/contact/mail/mail.component';
import { MappingComponent } from './view/logic/contact/mapping/mapping.component';
import { WebsiteComponent } from './view/logic/contact/website/website.component';
import { UserComponent } from './view/--App/-User/user.component';

const routes: Routes= [

  { path: '', component: HomeComponent},

  { path: 'contact', component:ContactComponent,
    children: [
      { path: 'mail', component: MailComponent},
      { path: 'map', component: MappingComponent},
      { path: 'website', component: WebsiteComponent}
    ]
  },

  { path: 'Login', component: LoginComponent},

  { path: 'User', loadChildren: () => import('./view/--App/-User/-user.module')
                  .then(mod => mod.UserModule)},

  { path: 'Register', component: RegisterComponent},

  { path: 'about', component: AboutComponent},

  { path: '**', component: NotFoundComponent},

  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
