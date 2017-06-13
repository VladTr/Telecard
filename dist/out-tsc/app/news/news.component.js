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
import { AngularFire } from "angularfire2";
export var NewsComponent = (function () {
    function NewsComponent(localService, af) {
        this.localService = localService;
        this.af = af;
    }
    // получаем данные из firebase для построения страницы новостей
    NewsComponent.prototype.getServerData = function () {
        this.loc = this.localService.getSettledLocale();
        this.news = this.af.database.list(this.loc + '/news/', { query: {
                orderByChild: 'order'
            } });
    };
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ловим изменения языка настройки для ререндеринга
        this.localService.getLocale().subscribe(function (data) { return _this.getServerData(); });
        this.getServerData();
    };
    NewsComponent = __decorate([
        Component({
            selector: 'app-news',
            templateUrl: './news.component.html',
            styleUrls: ['./news.component.css']
        }), 
        __metadata('design:paramtypes', [LocalService, AngularFire])
    ], NewsComponent);
    return NewsComponent;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app/news/news.component.js.map