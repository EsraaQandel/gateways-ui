import { Injectable } from '@angular/core';
import { Gateway } from '../models/gateway.model';
import { delay, Observable, of, throwError } from 'rxjs';
import { gateways } from '../mock/gateways.mock';
import { Device } from '../models/device.model';
import { ipAddressRegex } from '../config/ip-regex';

const latency = 800;

@Injectable()
export class GatewayServiceMock {
  public gatewaysMock = gateways;
  public selectedGateway = gateways[0];

  public getGateways(): Observable<Gateway[]> {
    return of(this.gatewaysMock).pipe(delay(latency));
  }

  public getGateway(serialNumber: string): Observable<Gateway> {
    let gateway = this.gatewaysMock.filter(
      (gateway) => gateway.serialNumber == serialNumber
    )[0];
    this.selectedGateway = gateway;
    return of(gateway).pipe(delay(latency));
  }

  public addGateway(gateway: Gateway): Observable<Gateway[]> {
    if (!this.isValidIp(gateway.ipAddress)) {
      return throwError(new Error('Error')).pipe(delay(latency));
    } else {
      let serialNumber = `#${this.gatewaysMock.length + 1}`;
      let updateGateway = new Gateway(
        gateway.level,
        gateway.name,
        gateway.ipAddress,
        serialNumber
      );
      this.gatewaysMock = [...this.gatewaysMock, updateGateway];
      return of(this.gatewaysMock).pipe(delay(latency));
    }
  }

  public addDevice(serialNumber: string, device: Device): Observable<Gateway> {
    let uid = `uid${this.selectedGateway.devices.length + 1}`;
    let updatedDevice = { ...device, uid };
    this.selectedGateway = {
      ...this.selectedGateway,
      devices: [...this.selectedGateway.devices, updatedDevice],
    };
    this.gatewaysMock = this.gatewaysMock.map((gateway) => {
      if (gateway.serialNumber == serialNumber) {
        return this.selectedGateway;
      }
      return gateway;
    });
    return of(this.selectedGateway).pipe(delay(latency));
  }

  public removeDevice(
    serialNumber: string,
    deviceId: string
  ): Observable<Gateway> {
    // filter
    this.gatewaysMock = this.gatewaysMock.map((gateway) => {
      if (gateway.serialNumber == serialNumber) {
        return {
          ...gateway,
          devices: gateway.devices.filter((device) => device.uid !== deviceId),
        };
      }
      return gateway;
    });
    this.selectedGateway = {
      ...this.selectedGateway,
      devices: this.selectedGateway.devices.filter((d) => d.uid !== deviceId),
    };
    return of(this.selectedGateway).pipe(delay(latency));
  }

  private isValidIp(ip: string): boolean {
    return ipAddressRegex.test(ip);
  }
}
