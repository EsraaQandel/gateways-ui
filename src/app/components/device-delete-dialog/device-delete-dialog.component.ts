import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GatewayFacade } from 'src/app/+state/gateways.facade';

@Component({
  selector: 'app-device-delete-dialog',
  templateUrl: './device-delete-dialog.component.html',
  styleUrls: ['./device-delete-dialog.component.scss'],
})
export class DeviceDeleteDialog {
  constructor(
    public dialogRef: MatDialogRef<DeviceDeleteDialog>,
    public facade: GatewayFacade,
    @Inject(MAT_DIALOG_DATA) public data: { uid: string; serialNumber: string }
  ) {}

  public delete() {
    this.facade.removeDevice(this.data.serialNumber, this.data.uid);
  }
}
