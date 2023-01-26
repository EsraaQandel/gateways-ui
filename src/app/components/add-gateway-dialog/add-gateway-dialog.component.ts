import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GatewayFacade } from 'src/app/+state/gateways.facade';
import { ipAddressRegex } from 'src/app/config/ip-regex';
import { Gateway } from 'src/app/models/gateway.model';

@Component({
  selector: 'app-add-gateway-dialog',
  templateUrl: './add-gateway-dialog.component.html',
  styleUrls: ['./add-gateway-dialog.component.scss'],
})
export class AddGatewayDialog implements OnInit {
  public form!: FormGroup;

  constructor(
    public facade: GatewayFacade,
    public dialogRef: MatDialogRef<AddGatewayDialog>,
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { uid: string }
  ) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public addGateway(): void {
    this.facade.addGateway(this.form.value as Gateway);
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      level: [null, [Validators.required]],
      name: [null, [Validators.required]],
      ipAddress: [
        null,
        [Validators.required, Validators.pattern(ipAddressRegex)],
      ],
    });
  }
}
