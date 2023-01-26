import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Gateway } from '../../models/gateway.model';
import { DeviceDeleteDialog } from '../device-delete-dialog/device-delete-dialog.component';

@Component({
  selector: 'app-gateways',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.scss'],
})
export class GatewayComponent {
  public panelOpenState = false;
  @Input() public gateway!: Gateway;

  constructor(private dialog: MatDialog, private readonly _router: Router) {}

  public openDeleteDialog(id: string): void {
    this.dialog.open(DeviceDeleteDialog, {
      data: { uid: id, serialNumber: this.gateway.serialNumber },
    });
  }

  public editDialog(): void {
    this._router.navigateByUrl(`gateway/${this.gateway.serialNumber}`);
  }
}
