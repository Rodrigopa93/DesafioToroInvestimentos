import { Component, OnInit } from '@angular/core';

import { Position, CheckingAccount, Patrimony } from "../userData/userData";
import { UserDataService } from '../userData/userData.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  panelOpenState = false;

  constructor(private userDateService: UserDataService) { }

  public positions: Position[] = [];

  public checkingAccountAmount: CheckingAccount[] = [];

  public patrimony: Patrimony[] = [];

  ngOnInit() {
    this.userDateService.GetPosition().subscribe(
      positions => {
        this.positions = positions;
      }
    );

    this.userDateService.GetCheckingAccount().subscribe(
      checkingAccountAmount => {
        this.checkingAccountAmount = checkingAccountAmount;
      }
    );

    this.userDateService.GetPatrimony().subscribe(
      patrimony => {
        this.patrimony = patrimony;
      }
    );
  }
}
