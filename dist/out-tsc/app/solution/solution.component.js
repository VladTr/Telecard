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
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFire } from "angularfire2";
import { LocalService } from "../local.service";
export var SolutionComponent = (function () {
    function SolutionComponent(router, activatedRote, localService, af) {
        var _this = this;
        this.router = router;
        this.activatedRote = activatedRote;
        this.localService = localService;
        this.af = af;
        this.solution = {};
        this.submenu = {};
        this.table2 = {};
        this.images = {};
        // получаем id выбранного комплекса и соответсвующие ему данные
        this.subscription = this.activatedRote.params.subscribe(function (param) {
            if (_this.id != param['id']) {
                _this.id = param['id'];
                _this.images = {};
                _this.table1 = {};
                _this.table2 = {};
                _this.solution = {};
                _this.solution = {};
                _this.getServerData();
            }
        });
    }
    // получаем данные по комплексу из firebase
    SolutionComponent.prototype.getServerData = function () {
        var _this = this;
        this.localService.getLocal('solutions', this.id).subscribe(function (data) {
            if (data == null) {
                _this.router.navigateByUrl('');
                return;
            }
            _this.solution = data;
            _this.submenu = data.submenu;
            _this.table2 = data.table2;
            _this.table1 = data.table1;
            _this.images = data.images;
        });
        this.items1 = this.localService.getList('solutions', this.id, 'table1');
        this.items2 = this.localService.getList('solutions', this.id, 'table2');
    };
    SolutionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // подписываемся на событие изменения языка и при необходимости выводим информацию на заданном языке
        this.localService.getLocale().subscribe(function (data) { return _this.getServerData(); });
        this.getServerData();
    };
    SolutionComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SolutionComponent = __decorate([
        Component({
            selector: 'app-solution',
            templateUrl: './solution.component.html',
            styleUrls: ['./solution.component.css']
        }), 
        __metadata('design:paramtypes', [Router, ActivatedRoute, LocalService, AngularFire])
    ], SolutionComponent);
    return SolutionComponent;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app/solution/solution.component.js.map