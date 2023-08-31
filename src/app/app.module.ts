import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import {firebaseConfig} from "./environment";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { LoginPageComponent } from './login-page/login-page.component';
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DashboardComponent,
    TabBarComponent,
    LoginPageComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      HttpClientModule,
      FormsModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,

    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
