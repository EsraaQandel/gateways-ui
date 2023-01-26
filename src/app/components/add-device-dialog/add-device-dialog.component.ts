import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GatewayFacade } from 'src/app/+state/gateways.facade';
import { Device } from 'src/app/models/device.model';
import { Gateway } from 'src/app/models/gateway.model';

@Component({
  selector: 'app-add-device-dialog',
  templateUrl: './add-device-dialog.component.html',
  styleUrls: ['./add-device-dialog.component.scss'],
})
export class AddDeviceDialogComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    public facade: GatewayFacade,
    public dialogRef: MatDialogRef<AddDeviceDialogComponent>,
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { serialNumber: string }
  ) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public addDevice(): void {
    let device = {
      ...this.form.value,
      creationDate: new Date(),
    } as Device;
    this.facade.addDevice(this.data.serialNumber, device);
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      vendor: [null, [Validators.required]],
      status: [null, [Validators.required]],
    });
  }
}
