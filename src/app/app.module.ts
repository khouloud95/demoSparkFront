import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from  '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ContactService } from './services/contacts.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
const appRoutes:Routes=[{path:'about',component:AboutComponent},
{path:'contacts',component:ContactsComponent},
{path:'new-contact',component:NewContactComponent},
{path:'editContact/:id',component:EditContactComponent },
{path:'',redirectTo:'/about', pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
     


  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
