import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { GatewayFacade } from 'src/app/+state/gateways.facade';
import { AddDeviceDialogComponent } from 'src/app/components/add-device-dialog/add-device-dialog.component';
import { AddGatewayDialog } from 'src/app/components/add-gateway-dialog/add-gateway-dialog.component';
import { DeviceDeleteDialog } from 'src/app/components/device-delete-dialog/device-delete-dialog.component';

@Component({
  selector: 'app-gateways-page',
  templateUrl: './gateway-page.component.html',
  styleUrls: ['./gateway-page.component.scss'],
})
export class GatewayPageComponent {
  constructor(
    public facade: GatewayFacade,
    private dialog: MatDialog,
    private readonly _router: Router
  ) {}

  public ngOnInit(): void {
    let serialNumber = this._router.url.split('/').slice(-1)[0];
    this.facade.getGateway(serialNumber);
  }

  public openAddDeviceDialog(serialNumber: string): void {
    this.dialog.open(AddDeviceDialogComponent, {
      data: { serialNumber },
      width: '30%',
    });
  }

  public openDeleteDialog(id: string, serialNumber: string): void {
    this.dialog.open(DeviceDeleteDialog, {
      data: { uid: id, serialNumber },
    });
  }

  public openAddGatewayDialog(): void {
    const dialogRef = this.dialog.open(AddGatewayDialog, {
      width: '30%',
    });
  }
}
