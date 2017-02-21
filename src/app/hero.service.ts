import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private heroesUrl = 'app/heroes.json';
  private headers = new Headers({'Content-Type': 'application/json' });

  constructor(
    private http: Http
  ) {}

  // getHeroes(): Promise<Hero[]> {
  //   return this.http.get(this.heroesUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Hero[])
  //     .catch(this.handleError);
  // }
  //
  // getHero(id: Number): Promise<Hero> {
  //   const url = '${this.heroesUrl}/${id}';
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json().data as Hero)
  //     .catch(this.handleError);
  // }
  //
  // private handleError(error: any):Promise<any> {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get(this.heroesUrl)
      .map(function(res: Response) {

        let body = res.json();
        var heroes = body.heroes || [];

        let hero: Hero = heroes.find(function(element) {
          return element.id === id;
        });

        return hero;

      })
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const updateUrl = 'app/heroes.json/${hero.id}';
    return this.http
      .put(updateUrl, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  extractData(res: Response): Hero[] {
    let body = res.json();
    return body.heroes || [];
  }

  handleError(error: Response | any) {

    let errorMsg: string;
    if(error instanceof Response){
      errorMsg = error.status + "-" + error.statusText || '' + error;
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }

    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }

}
