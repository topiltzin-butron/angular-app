var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes.json';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService.prototype.getHero = function (id) {
        return this.http.get(this.heroesUrl)
            .map(function (res) {
            var body = res.json();
            var heroes = body.heroes || [];
            var hero = heroes.find(function (element) {
                return element.id === id;
            });
            return hero;
        })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var updateUrl = 'app/heroes.json/${hero.id}';
        return this.http
            .put(updateUrl, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.extractData = function (res) {
        var body = res.json();
        return body.heroes || [];
    };
    HeroService.prototype.handleError = function (error) {
        var errorMsg;
        if (error instanceof Response) {
            errorMsg = error.status + "-" + error.statusText || '' + error;
        }
        else {
            errorMsg = error.message ? error.message : error.toString();
        }
        console.error(errorMsg);
        return Observable.throw(errorMsg);
    };
    return HeroService;
}());
HeroService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], HeroService);
export { HeroService };
//# sourceMappingURL=../../../src/app/hero.service.js.map