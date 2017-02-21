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
import { Subject } from 'rxjs/Subject';
import { WikiService } from './wiki.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
var WikiSmartComponent = (function () {
    function WikiSmartComponent(wikiService) {
        this.wikiService = wikiService;
        this.searchTermStream = new Subject();
    }
    WikiSmartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.wikiService.search(term); });
    };
    WikiSmartComponent.prototype.search = function (term) {
        this.searchTermStream.next(term);
    };
    return WikiSmartComponent;
}());
WikiSmartComponent = __decorate([
    Component({
        selector: 'wiki-smart',
        templateUrl: './wiki.component.html',
        providers: [WikiService]
    }),
    __metadata("design:paramtypes", [WikiService])
], WikiSmartComponent);
export { WikiSmartComponent };
//# sourceMappingURL=../../../src/app/wiki-smart.component.js.map