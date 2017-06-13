var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LocalService } from "./local.service";
import { AngularFireModule } from "angularfire2";
import { firebaseConfig } from "./../environments/firebase.config";
import { ProductComponent } from './product/product.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SolutionComponent } from './solution/solution.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './admin/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from "./admin/auth.guard";
import { AuthService } from "./admin/auth.service";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app/app.module.js.map