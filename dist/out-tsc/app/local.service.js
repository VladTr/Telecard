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
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { firebaseConfig } from "../environments/firebase.config";
import { Subject } from "rxjs";
import { AngularFire } from "angularfire2";
export var LocalService = (function () {
    function LocalService(http, af) {
        this.http = http;
        this.af = af;
        this.locale = 'ru';
        this.observable = new Subject();
    }
    // устанавливаем язык
    LocalService.prototype.setLocale = function (local) {
        this.locale = local;
        this.observable.next(local);
    };
    // подписываемся на данный метод для реактивного рендеринга компонентов при смене языка
    LocalService.prototype.getLocale = function () {
        return this.observable.asObservable();
    };
    LocalService.prototype.getLocalData = function (loc) {
        this.locale = loc;
    };
    // вспомогательный метод - возвращает текущий язык
    LocalService.prototype.getSettledLocale = function () {
        return this.locale;
    };
    // метод получения списочных данных firebase
    LocalService.prototype.getList = function (core, item, table) {
        return this.af.database.list(this.locale + '/' + core + '/' + item + '/' + table + '/rows');
    };
    // метод получения объектных данных firebase
    LocalService.prototype.getLocal = function (core, product) {
        if (product == '') {
            return this.http.get(firebaseConfig.databaseURL + '/' + this.locale + '/' + core + '.json')
                .map(function (response) { return response.json(); });
        }
        else {
            return this.http.get(firebaseConfig.databaseURL + '/' + this.locale + '/' + core + '/' + product + '.json')
                .map(function (response) { return response.json(); });
        }
    };
    LocalService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AngularFire])
    ], LocalService);
    return LocalService;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app/local.service.js.map