// компонент отвечаюший за построение главной страницы
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
import { LocalService } from "../local.service";
export var HomeComponent = (function () {
    function HomeComponent(localService) {
        this.localService = localService;
        this.systems = {};
        this.radio = {};
        this.modernization = {};
        this.appNew = {};
    }
    // получаем данные из firebase для построения главной страницы
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.localService.getLocal('home', '').subscribe(function (data) {
            _this.appNew = data.new;
            _this.radio = data.radio;
            _this.systems = data.systems;
            _this.modernization = data.modernization;
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ловим изменения языка настройки для ререндеринга
        this.localService.getLocale().subscribe(function (data) { return _this.getData(); });
        this.getData();
        $(document).ready(function () {
            $('figcaption').on('click', 'a', function (event) {
                event.preventDefault();
                var id = $(this).attr('href');
                var top = $(id).offset().top;
                $('body,html').animate({ scrollTop: top }, 1500);
            });
        });
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [LocalService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app/home/home.component.js.map