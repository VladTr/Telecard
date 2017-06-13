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
import { LocalService } from "./local.service";
import { AngularFire } from "angularfire2";
import { firebaseConfig } from "../environments/firebase.config";
import { Title } from "@angular/platform-browser";
export var AppComponent = (function () {
    function AppComponent(af, localService, titleService) {
        this.af = af;
        this.localService = localService;
        this.titleService = titleService;
        // задаем язык по умолчанию
        this.loc = 'ru';
        this.products = {};
        this.contentMain = {};
        this.submenu = {};
        this.submenuAbout = {};
        this.appFooter = {};
    }
    // метод задающий новый язык по нажатию
    AppComponent.prototype.toggleLanguage = function (lang) {
        if (this.loc == lang) {
            return;
        }
        else {
            this.loc = lang;
            this.localService.setLocale(this.loc);
            this.getData();
        }
    };
    // прочитываем / перепрочитываем данные из firebase
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.localService.getLocal('about', '').subscribe(function (data) {
            _this.submenuAbout = data.submenu;
        });
        this.localService.getLocal('app', '').subscribe(function (data) {
            _this.contentMain = data.menu;
            _this.submenu = data.submenu;
            _this.appFooter = data.footer;
        });
        this.items = this.af.database.list(firebaseConfig.databaseURL + '/' + this.loc + '/products');
        this.solutions = this.af.database.list(firebaseConfig.databaseURL + '/' + this.loc + '/solutions');
        if (this.loc == 'ru') {
            this.titleService.setTitle('Телекарт-Прибор');
        }
        if (this.loc == 'en') {
            this.titleService.setTitle('Telecard-Pribor');
        }
        if (this.loc == 'ua') {
            this.titleService.setTitle('Телекарт-Прилад');
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var doc_w = $(document).width();
        $(window).resize(function () {
            doc_w = $(document).width();
        });
        $('a#prevent1, a#prevent2').click(function (event) {
            // alert(doc_w);
            if (doc_w > 768) {
                event.preventDefault();
            }
        });
        $('li.dropdown').mouseover(function () {
            $(this).find('a.dropdown-toggle').css('color', 'black');
        }).mouseleave(function () {
            $('a.dropdown-toggle').css('color', '');
        });
        this.getData();
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [AngularFire, LocalService, Title])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app/app.component.js.map