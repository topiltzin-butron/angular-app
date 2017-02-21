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
import { Headers, Http } from '@angular/http';
var KillersService = (function () {
    function KillersService(http) {
        this.http = http;
        this.KILLERS_BASE_URL = 'http://localhost:8080/thebride/persona';
        this.headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
    }
    KillersService.prototype.getKillers = function () {
        return this.http.get(this.KILLERS_BASE_URL)
            .toPromise()
            .then(function (response) {
            return response.json();
        }).then(function (responsejson) {
            return responsejson;
        })
            .catch(this.handleKillersError);
    };
    KillersService.prototype.handleKillersError = function (error) {
        return Promise.reject(error.message || error);
    };
    KillersService.prototype.getKiller = function (id) {
        var url = this.KILLERS_BASE_URL + '/' + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (responsejson) { return responsejson; })
            .catch(this.handleKillersError);
    };
    KillersService.prototype.addKiller = function (killer) {
        var url = this.KILLERS_BASE_URL;
        return this.http.post(url, JSON.stringify(killer), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (responsejson) { return responsejson; })
            .catch(this.handleKillersError);
    };
    KillersService.prototype.updateKiller = function (killer) {
        var url = this.KILLERS_BASE_URL + '/' + killer.id;
        return this.http.put(url, JSON.stringify(killer), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (responsejson) { return responsejson; })
            .catch(this.handleKillersError);
    };
    KillersService.prototype.deleteKiller = function (id) {
        var url = this.KILLERS_BASE_URL + '/' + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (responsejson) { return responsejson; })
            .catch(this.handleKillersError);
    };
    return KillersService;
}());
KillersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], KillersService);
export { KillersService };
//# sourceMappingURL=../../../../src/app/thebride/killers.service.js.map