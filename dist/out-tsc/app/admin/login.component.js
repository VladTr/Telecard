var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
export var LoginComponent = (function () {
    function LoginComponent(authService, fb, route) {
        this.authService = authService;
        this.fb = fb;
        this.route = route;
        this.logged = false;
        this.error = '';
    }
    LoginComponent.prototype.sign = function () {
        var _this = this;
        this.authService.signIn(this.myForm.value).catch(function (error) {
            if (error.message !== '') {
                _this.error = error.message;
            }
        });
        setTimeout(function () {
            if (_this.authService.isAuth()) {
                _this.error = '';
                _this.logged = true;
                _this.route.navigate(['admin']);
            }
        }, 1500);
    };
    LoginComponent.prototype.logOut = function () {
        this.authService.logOut();
        this.logged = false;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            template: "\n    <div class=\"admin\">\n      <h4>\n        Admin panel\n      </h4>\n      <div class=\"logged\">\n        <div *ngIf=\"logged==true\">\n        You logged\n        <p><button class=\"btn btn-danger\" (click)=\"logOut()\">Logout</button></p>\n        </div>\n        <div *ngIf=\"logged==false\">\n        You are not logged\n        </div>\n      </div>\n      <p>\n      Please enter your email & password\n      </p>\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"sign()\">\n          <div class=\"form-group\">\n          <label for=\"email\">E-Mail</label>\n          <input formControlName=\"email\" type=\"email\" id=\"email\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input formControlName=\"password\" type=\"password\" id=\"password\" class=\"form-control\">\n          </div>\n          <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Sign In</button>\n      </form>\n      <div *ngIf=\"error\">\n        {{error}}\n      </div>\n    </div>\n  ",
            styles: ['.admin{height: 700px} .logged{text-align: right}'],
        }), 
        __metadata('design:paramtypes', [AuthService, FormBuilder, Router])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app/admin/login.component.js.map