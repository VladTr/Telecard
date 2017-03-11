import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LocalService} from "./local.service";

import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "./../environments/firebase.config";
import { ProductComponent } from './product/product.component';

import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SolutionComponent } from './solution/solution.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './admin/login.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from "./admin/auth.guard";
import {AuthService} from "./admin/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    NewsComponent,
    SolutionComponent,
    PageNotFoundComponent,
    AboutComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [LocalService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



