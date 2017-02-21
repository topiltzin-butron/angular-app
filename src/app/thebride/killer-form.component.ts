import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { KillersService } from './killers.service';
import { Killer } from './killer';
import { Persona } from './persona';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'killer-form',
  templateUrl: './killer-form.html',
  styleUrls: ['./killer-form.css']
})

export class KillerForm implements OnInit {

  id: string = ""

  @Input()
  editmode: boolean = false;

  @Input()
  killer: Persona = new Persona('', '', 0, '', '', '', '');

  @Input()
  cancelCallback: Function;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private killerService: KillersService
  ){}

  ngOnInit(): void {
    this.route.params
      .subscribe((params) => this.id = params['id'])
  }

  cancel(): void {
    if(this.cancelCallback){
      this.cancelCallback();
    } else {
      this.router.navigate(['/killers']);
    }
  }

  onSubmit(): void {

    //alert("onSubmit: " + JSON.stringify(this.killer));

    if(this.editmode){
      this.killerService.updateKiller(this.killer).then(killer => {
        this.killer = killer.persona;
        this.cancelCallback();
      });
    } else {
      this.killerService.addKiller(this.killer).then(killer => {
        this.killer = killer.persona;
        this.goToDetail();
      });

    }

  }

  get diagnostic() { return JSON.stringify(this.killer); }

  goToDetail(): void {
    this.router.navigate(['/killers', this.killer.id]);
  }

}
