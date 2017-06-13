var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalService } from "../local.service";
import { AngularFire } from "angularfire2";
export var ProductComponent = (function () {
    function ProductComponent(router, activatedRote, localService, af) {
        var _this = this;
        this.router = router;
        this.activatedRote = activatedRote;
        this.localService = localService;
        this.af = af;
        this.product = {};
        this.submenu = {};
        this.table1 = {};
        this.table2 = {};
        this.dwl = {};
        this.application = {};
        this.loc = this.localService.getSettledLocale();
        // получаем данные по товару по его id
        this.subscription = this.activatedRote.params.subscribe(function (param) {
            if (_this.id != param['id']) {
                _this.id = param['id'];
                _this.getServerData();
            }
        });
    }
    // прочитываем данные от товаре из firebase
    ProductComponent.prototype.getServerData = function () {
        var _this = this;
        this.localService.getLocal('products', this.id).subscribe(function (data) {
            if (data == null) {
                _this.router.navigateByUrl('');
                return;
            }
            _this.product = data;
            _this.application = data.application;
            _this.table1 = data.table1;
            _this.table2 = data.table2;
        });
        this.localService.getLocal('products', '').subscribe(function (data) {
            _this.submenu = data.submenu;
            _this.dwl = data.misc;
        });
        this.items1 = this.af.database.list(this.loc + '/products/' + this.id + '/table1/rows');
        this.items2 = this.af.database.list(this.loc + '/products/' + this.id + '/table2/rows');
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // отображаем данные по товару в зависимости от изменившегося языка
        this.localService.getLocale().subscribe(function (data) {
            _this.loc = data;
            _this.getServerData();
        });
        this.getServerData();
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], ProductComponent.prototype, "loc", void 0);
    ProductComponent = __decorate([
        Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        }), 
        __metadata('design:paramtypes', [Router, ActivatedRoute, LocalService, AngularFire])
    ], ProductComponent);
    return ProductComponent;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app/product/product.component.js.map