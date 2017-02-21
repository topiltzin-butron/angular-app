import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { WikiComponent } from './wiki.component';
import { WikiSmartComponent } from './wiki-smart.component';
import { Killers } from './thebride/killers.component';
import { KillerForm } from './thebride/killer-form.component';
import { KillerDetails } from './thebride/killer-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'wiki',
    component: WikiComponent
  },
  {
    path: 'wiki-smart',
    component: WikiSmartComponent
  },
  {
    path: 'killers',
    component: Killers
  },
  {
    path: 'killers/add',
    component: KillerForm
  },
  {
    path: 'killers/:id',
    component: KillerDetails
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
