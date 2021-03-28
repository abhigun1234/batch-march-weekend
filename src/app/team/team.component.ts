import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
   IplTeam=["Delhi","Mumbai","Kolkata","Punjab"]
  constructor() { }

  ngOnInit(): void {
  }

}
