import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[];
  selectedHero: Hero;
  errorMessage: string;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);

    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes,
      error => this.errorMessage = <any>error
    );

  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
