import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Killer } from './killer';
import { Persona } from './persona';

@Injectable()
export class KillersService {

  private KILLERS_BASE_URL: string = 'http://localhost:8080/thebride/persona';
  private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json' });

  constructor(
    private http: Http
  ){}

  getKillers(): Promise<Killer[]> {

    return this.http.get(this.KILLERS_BASE_URL)
      .toPromise()
      .then((response) => {
        return response.json();
      }).then((responsejson) => {
        return responsejson as Killer[];
      })
      .catch(this.handleKillersError);
  }

  private handleKillersError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  getKiller(id: string): Promise<Killer> {

    var url = this.KILLERS_BASE_URL + '/' + id;

    return this.http.get(url)
      .toPromise()
      .then((response) => response.json() )
      .then((responsejson) => responsejson as Killer )
      .catch(this.handleKillersError);
  }

  addKiller(killer: Persona): Promise<Killer> {
    var url = this.KILLERS_BASE_URL;

    return this.http.post(url, JSON.stringify(killer), {headers: this.headers})
      .toPromise()
      .then((response) => response.json() )
      .then((responsejson) => responsejson as Killer )
      .catch(this.handleKillersError);
  }

  updateKiller(killer: Persona): Promise<Killer> {
    var url = this.KILLERS_BASE_URL + '/' + killer.id;

    return this.http.put(url, JSON.stringify(killer), {headers: this.headers})
      .toPromise()
      .then((response) => response.json() )
      .then((responsejson) => responsejson as Killer )
      .catch(this.handleKillersError);
  }

  deleteKiller(id: string): Promise<Killer> {
    var url = this.KILLERS_BASE_URL + '/' + id;

    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then((response) => response.json() )
      .then((responsejson) => responsejson as Killer )
      .catch(this.handleKillersError);
  }

}
