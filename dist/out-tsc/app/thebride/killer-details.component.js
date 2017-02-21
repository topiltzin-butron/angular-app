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
import { Killer } from './killer';
import 'rxjs/add/operator/switchMap';
var KillerDetails = (function () {
    function KillerDetails(router, route, killersService) {
        this.router = router;
        this.route = route;
        this.killersService = killersService;
        this.killer = null;
        this.editMode = false;
    }
    KillerDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.cancel = this.cancel.bind(this);
        this.route.params
            .switchMap(function (params) { return _this.killersService.getKiller(params['id']); })
            .subscribe(function (killer) { return _this.killer = killer; });
    };
    KillerDetails.prototype.edit = function () {
        this.editMode = true;
    };
    KillerDetails.prototype.delete = function () {
        var _this = this;
        this.killersService.deleteKiller(this.killer.persona.id).then(function (killer) {
            _this.goToKillers();
        });
    };
    KillerDetails.prototype.cancel = function () {
        this.editMode = false;
    };
    KillerDetails.prototype.goToKillers = function () {
        this.router.navigate(['/killers']);
    };
    return KillerDetails;
}());
__decorate([
    Input(),
    __metadata("design:type", Killer)
], KillerDetails.prototype, "killer", void 0);
KillerDetails = __decorate([
    Component({
        selector: 'killer-details',
        templateUrl: './killer-details.html',
        styleUrls: ['./killer-details.css']
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        KillersService])
], KillerDetails);
export { KillerDetails };
//# sourceMappingURL=../../../../src/app/thebride/killer-details.component.js.map