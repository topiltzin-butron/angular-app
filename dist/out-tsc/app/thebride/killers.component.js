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
import { KillersService } from './killers.service';
var Killers = (function () {
    function Killers(killersService) {
        this.killersService = killersService;
        this.killers = [];
    }
    Killers.prototype.ngOnInit = function () {
        this.getKillers();
    };
    Killers.prototype.getKillers = function () {
        var _this = this;
        this.killersService.getKillers().then(function (killers) {
            _this.killers = killers;
        });
    };
    return Killers;
}());
Killers = __decorate([
    Component({
        selector: 'killers',
        templateUrl: './killers.html',
        styleUrls: ['./killers.css']
    }),
    __metadata("design:paramtypes", [KillersService])
], Killers);
export { Killers };
//# sourceMappingURL=../../../../src/app/thebride/killers.component.js.map