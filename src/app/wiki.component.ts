import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WikiService } from './wiki.service';

@Component({
  selector: 'wiki',
  templateUrl: './wiki.component.html',
  providers: [ WikiService ]
})

export class WikiComponent {

  items: Observable<string[]>

  constructor(
    private wikiService: WikiService
  ){}

  search(term: string) {
    this.items = this.wikiService.search(term);
  }

}
