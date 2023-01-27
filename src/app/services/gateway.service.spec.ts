import { TestBed } from '@angular/core/testing';

import { Gateway } from '../models/gateway.model';
import { Device } from '../models/device.model';
import { GatewayService } from './gateway.service';
import { Status } from '../enum/device-status.enum';

describe('GatewayService', () => {
  let service: GatewayService;
  let gateway = new Gateway('level1', 'name1', '1.1.1.1', '#123');
  let device = {
    vendor: 'vendor name',
    creationDate: new Date(),
    status: Status.Offline,
  } as Device;

  beforeEach(() => {
    service = TestBed.inject(GatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default gateways', () => {
    expect(service.gatewaysMock).toBeDefined();
  });

  it('should add new gateway', (done) => {
    service.gatewaysMock = [];
    service.addGateway(gateway).subscribe(() => {
      expect(service.gatewaysMock.length).toBe(1);
      done();
    });
  });

  it('should add new device', (done) => {
    service.gatewaysMock = [gateway];
    service.selectedGateway = gateway;
    service.addDevice(gateway.serialNumber, device).subscribe(() => {
      expect(service.selectedGateway.devices.length).toBe(1);
      done();
    });
  });

  it('should remove device', (done) => {
    let gatewayWithDevice = { ...gateway, devices: [device] };
    service.gatewaysMock = [gatewayWithDevice];
    service.selectedGateway = gatewayWithDevice;
    service.removeDevice(gateway.serialNumber, device.uid).subscribe(() => {
      expect(service.selectedGateway.devices.length).toBe(0);
      done();
    });
  });
});
