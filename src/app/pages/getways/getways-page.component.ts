import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { GatewayFacade } from 'src/app/+state/gateways.facade';
import { AddGatewayDialog } from 'src/app/components/add-gateway-dialog/add-gateway-dialog.component';

@Component({
  selector: 'app-getways-page',
  templateUrl: './getways-page.component.html',
  styleUrls: ['./getways-page.component.scss'],
})
export class GetwaysPageComponent implements OnInit {
  constructor(public facade: GatewayFacade, private dialog: MatDialog) {}

  public ngOnInit(): void {
    this.facade.getGateways();
  }

  public openAddGatewayDialog(): void {
    const dialogRef = this.dialog.open(AddGatewayDialog, {
      width: '30%',
    });
  }
}
