import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  errorMessage: string;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));

    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.slice(1, 5),
      error => this.errorMessage = <any>error
    );
  }

}
