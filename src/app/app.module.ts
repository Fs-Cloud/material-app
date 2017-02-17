// Angular Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout/flexbox';

// Third Party Module Imports
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MomentModule } from 'angular2-moment';


import 'hammerjs';

import { AppComponent } from './app.component';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
//import { SalesComponent } from './pages/sales/sales.component';
import { MessagesComponent } from './pages/messages/messages.component';

//Master Components

//Detail Components
import { MapsWidgetComponent } from './components/maps-widget/maps-widget.component';
import { MessagesWidgetComponent } from './components/messages-widget/messages-widget.component';
import { TasksWidgetComponent } from './components/tasks-widget/tasks-widget.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


//SidebarComponents
import { NotificationsComponent } from './notifications/notifications.component';
// import { MainMenuComponent } from './components/popover/main-menu/main-menu.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'messages', component: MessagesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    MapsWidgetComponent,
    MessagesWidgetComponent,
    TasksWidgetComponent,
    ContactFormComponent,
    NotificationsComponent,
    //SalesComponent,
    MessagesComponent,
    //MainMenuComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqkrkJ74JFbCXlZO0l7xm_1uHlJebs7B4'
    }),
    MomentModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
