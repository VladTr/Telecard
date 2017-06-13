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
import { ActivatedRoute } from "@angular/router";
import { LocalService } from "../local.service";
export var AboutComponent = (function () {
    function AboutComponent(activatedRote, localService) {
        var _this = this;
        this.activatedRote = activatedRote;
        this.localService = localService;
        this.tour = '';
        this.technology = '';
        this.center = '';
        this.cooperate = '';
        this.contacts = '';
        this.history = {};
        this.subscription = this.activatedRote.params.subscribe(function (param) {
            if (_this.id != param['id']) {
                _this.id = param['id'];
                _this.getData();
            }
        });
    }
    AboutComponent.prototype.getData = function () {
        var _this = this;
        this.localService.getLocal('about', '').subscribe(function (data) {
            _this.history = data.history;
            _this.tour = data.tour;
            _this.technology = data.technology;
            _this.center = data.center;
            _this.cooperate = data.cooperate;
            _this.contacts = data.contacts;
        });
    };
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localService.getLocale().subscribe(function (data) { return _this.getData(); });
        this.getData();
    };
    AboutComponent = __decorate([
        Component({
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, LocalService])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app/about/about.component.js.map