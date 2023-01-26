import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Device } from '../../models/device.model';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent {
  @Input() public device!: Device;
  @Output() public delete = new EventEmitter<string>();

  constructor(private readonly _router: Router) {}

  public onDelete(): void {
    this.delete.emit(this.device.uid);
  }

  public showButton(): boolean {
    return !this._router.url.includes('gateways');
  }
}
