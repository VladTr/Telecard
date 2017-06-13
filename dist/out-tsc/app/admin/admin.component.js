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
import { AuthService } from "./auth.service";
import { FormBuilder, Validators } from "@angular/forms";
export var AdminComponent = (function () {
    function AdminComponent(authService, fb) {
        this.authService = authService;
        this.fb = fb;
    }
    AdminComponent.prototype.getData = function () {
        var _this = this;
        this.authService.dataFromBase().subscribe(function (data) {
            var description = data.description;
            _this.myForm = _this.fb.group({
                description: [description, Validators.required]
            });
        });
    };
    AdminComponent.prototype.send = function () {
        this.authService.updateBase(this.myForm.value);
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            description: ['Нажмите: Начать редактирование', Validators.required]
        });
    };
    AdminComponent = __decorate([
        Component({
            selector: 'app-admin',
            template: "\n   <div class=\"admin\">\n   \n    <button class=\"btn btn-info\" (click)=\"getData()\">\u041D\u0430\u0447\u0430\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435</button>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"send()\">\n    <hr>\n        <div class=\"form-group\">\n          <label for=\"description\">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</label>\n          <textarea rows=\"10\" cols=\"45\" formControlName=\"description\" type=\"text\" id=\"description\" class=\"form-control\">\n          </textarea>\n        </div>\n        <!--<div class=\"input-group\">-->\n          <!--<label for=\"password\">Password</label>-->\n          <!--<input formControlName=\"password\" type=\"password\" id=\"password\" class=\"form-control\">-->\n        <!--</div>-->\n        <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-success\">\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F</button>\n    </form>\n   </div> \n  ",
            styles: ['.admin{min-height: 700px; margin-top: 30px}']
        }), 
        __metadata('design:paramtypes', [AuthService, FormBuilder])
    ], AdminComponent);
    return AdminComponent;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app/admin/admin.component.js.map