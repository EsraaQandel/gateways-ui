import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Device } from '../models/device.model';
import { Gateway } from '../models/gateway.model';

import * as GatewaysActions from './gateways.actions';

import * as GatewaysSelectors from './gateways.selectors';

@Injectable({ providedIn: 'root' })
export class GatewayFacade {
  public gateways$ = this.store.pipe(select(GatewaysSelectors.gateways));
  public selectedGateway$ = this.store.pipe(
    select(GatewaysSelectors.selectedGateway)
  );
  public error$ = this.store.pipe(select(GatewaysSelectors.error));
  public hasError$ = this.error$.pipe(map((error) => error != null));
  public loaded$ = this.store.pipe(select(GatewaysSelectors.loaded));

  constructor(private readonly store: Store) {}

  public getGateways() {
    this.store.dispatch(GatewaysActions.loadGateways());
  }

  public getGateway(serialNumber: string) {
    this.store.dispatch(GatewaysActions.loadSingleGateway({ serialNumber }));
  }

  public addGateway(gateway: Gateway) {
    this.store.dispatch(GatewaysActions.addGateway({ gateway }));
  }

  public addDevice(serialNumber: string, device: Device) {
    this.store.dispatch(GatewaysActions.addDevice({ serialNumber, device }));
  }

  public removeDevice(serialNumber: string, deviceId: string) {
    this.store.dispatch(
      GatewaysActions.removeDevice({ serialNumber, deviceId })
    );
  }
}
