import { Component, OnInit } from '@angular/core';
import { KillersService } from './killers.service';
import { Killer } from './killer';

@Component({
  selector: 'killers',
  templateUrl: './killers.html',
  styleUrls: ['./killers.css']
})

export class Killers implements OnInit {

  killers: Killer[] = []

  constructor(
    private killersService: KillersService
  ){}

  ngOnInit(): void {
      this.getKillers();
  }

  getKillers(): void {
    this.killersService.getKillers().then(killers => {
      this.killers = killers;
    });
  }

}
