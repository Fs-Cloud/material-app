import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
// import { IconDemo } from './app.component';
import { MapsComponent } from './maps/maps.component';

import 'hammerjs';
import { MessagesWidgetComponent } from './messages-widget/messages-widget.component';
import { TasksWidgetComponent } from './tasks-widget/tasks-widget.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NotificationsComponent } from './notifications/notifications.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'notifications', component: NotificationsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    MapsComponent,
    MessagesWidgetComponent,
    TasksWidgetComponent,
    ContactFormComponent,
    NotificationsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
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
