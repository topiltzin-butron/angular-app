import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { KillersService } from './killers.service';
import { Killer } from './killer';
import { KillerForm } from './killer-form.component';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'killer-details',
  templateUrl: './killer-details.html',
  styleUrls: ['./killer-details.css']
})

export class KillerDetails implements OnInit {

  @Input()
  killer: Killer = null;
  editMode: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private killersService: KillersService
  ){}

  ngOnInit():void {

    this.cancel = this.cancel.bind(this);

    this.route.params
      .switchMap((params: Params) => this.killersService.getKiller(params['id']) )
      .subscribe(killer => this.killer = killer );
  }

  edit(): void {
    this.editMode = true;
  }

  delete(): void {
    this.killersService.deleteKiller(this.killer.persona.id).then(killer => {
      this. goToKillers();
    });
  }

  cancel(): void {
    this.editMode = false;
  }

  goToKillers(): void {
    this.router.navigate(['/killers']);
  }

}
