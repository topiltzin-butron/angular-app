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
import { KillersService } from './killers.service';
import { Persona } from './persona';
import 'rxjs/add/operator/switchMap';
var KillerForm = (function () {
    function KillerForm(router, route, killerService) {
        this.router = router;
        this.route = route;
        this.killerService = killerService;
        this.id = "";
        this.editmode = false;
        this.killer = new Persona('', '', 0, '', '', '', '');
    }
    KillerForm.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) { return _this.id = params['id']; });
    };
    KillerForm.prototype.cancel = function () {
        if (this.cancelCallback) {
            this.cancelCallback();
        }
        else {
            this.router.navigate(['/killers']);
        }
    };
    KillerForm.prototype.onSubmit = function () {
        var _this = this;
        if (this.editmode) {
            this.killerService.updateKiller(this.killer).then(function (killer) {
                _this.killer = killer.persona;
                _this.cancelCallback();
            });
        }
        else {
            this.killerService.addKiller(this.killer).then(function (killer) {
                _this.killer = killer.persona;
                _this.goToDetail();
            });
        }
    };
    Object.defineProperty(KillerForm.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.killer); },
        enumerable: true,
        configurable: true
    });
    KillerForm.prototype.goToDetail = function () {
        this.router.navigate(['/killers', this.killer.id]);
    };
    return KillerForm;
}());
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], KillerForm.prototype, "editmode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Persona)
], KillerForm.prototype, "killer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], KillerForm.prototype, "cancelCallback", void 0);
KillerForm = __decorate([
    Component({
        selector: 'killer-form',
        templateUrl: './killer-form.html',
        styleUrls: ['./killer-form.css']
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        KillersService])
], KillerForm);
export { KillerForm };
//# sourceMappingURL=../../../../src/app/thebride/killer-form.component.js.map