import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { WikiService } from './wiki.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'wiki-smart',
  templateUrl: './wiki.component.html',
  providers: [ WikiService ]
})

export class WikiSmartComponent implements OnInit {

  items: Observable<string[]>
  private searchTermStream = new Subject<string>()

  constructor(
    private wikiService: WikiService
  ){}

  ngOnInit(){
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.wikiService.search(term));
  }

  search(term: string) {
    this.searchTermStream.next(term);
  }

}
