import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ulstercounties',
  templateUrl: './ulstercounties.page.html',
  styleUrls: ['./ulstercounties.page.scss'],
})
export class UlstercountiesPage implements OnInit {
  counties: string[] = ["Antrim", "Armagh", "Cavan", "Derry",
    "Donegal", "Down", "Fermanagh", "Monaghan", "Tyrone"];

  constructor() { }

  ngOnInit() {
  }

}
