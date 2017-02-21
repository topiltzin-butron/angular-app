import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


// in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

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

@NgModule({
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
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ HeroService, KillersService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
