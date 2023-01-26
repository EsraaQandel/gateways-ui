import { TestBed } from '@angular/core/testing';

import { Gateway } from '../models/gateway.model';
import { GatewayService } from './gateway.service';

fdescribe('GatewayService', () => {
  let service: GatewayService;

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
    let gateway = new Gateway('level1', 'name1', '1.1.1.1', '#123');
    service.addGateway(gateway).subscribe(() => {
      expect(service.gatewaysMock.length).toBe(1);
      done();
    });
  });
});
