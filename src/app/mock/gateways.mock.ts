import { Status } from "../enum/device-status.enum";
import { Gateway } from "../models/gateway.model";

export const gateways: Gateway[] = [
  {
    serialNumber: '#123',
    level: '1',
    name: 'App Gateway',
    ipAddress: '192.158.1.38',
    devices: [
      {
        uid: 'uid123',
        vendor: 'App Vendor',
        creationDate: new Date('12/2/2009'),
        status: Status.Offline,
      },
      {
        uid: 'uid456',
        vendor: 'Youtube Vendor',
        creationDate: new Date('1/12/2005'),
        status: Status.Online,
      },
    ],
  },
  {
    serialNumber: '#345',
    level: '2',
    name: 'API Gateway',
    ipAddress: '192.0.2.1',
    devices: [],
  }
];
