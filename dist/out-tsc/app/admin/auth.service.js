var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
export var AuthService = (function () {
    function AuthService(af) {
        this.af = af;
    }
    AuthService.prototype.signIn = function (user) {
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.logOut = function () {
        if (this.isAuth()) {
            firebase.auth().signOut().then(function () {
            }).catch(function (error) {
            });
        }
    };
    AuthService.prototype.isAuth = function () {
        if (typeof (firebase) == 'undefined')
            return false;
        var user = firebase.auth().currentUser;
        if (user) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.dataFromBase = function () {
        return this.af.database.object('/ru/products/product-ta01');
    };
    AuthService.prototype.updateBase = function (data) {
        this.af.database.object('/ru/products/product-ta01').update(data);
    };
    AuthService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AngularFire])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app/admin/auth.service.js.map