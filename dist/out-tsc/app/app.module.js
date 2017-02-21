var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { WikiComponent } from './wiki.component';
import { WikiSmartComponent } from './wiki-smart.component';
import { Killers } from './thebride/killers.component';
import { KillersService } from './thebride/killers.service';
import { KillerDetails } from './thebride/killer-details.component';
import { KillerForm } from './thebride/killer-form.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeroesComponent,
            HeroDetailComponent,
            DashboardComponent,
            WikiComponent,
            WikiSmartComponent,
            Killers,
            KillerDetails,
            KillerForm
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            JsonpModule,
            AppRoutingModule
        ],
        providers: [HeroService, KillersService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map