import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    NewsComponent,
    SolutionComponent,
    PageNotFoundComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }



