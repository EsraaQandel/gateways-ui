import { Device } from './device.model';

export class Gateway {
  public serialNumber: string;
  public level: string;
  public name: string;
  public ipAddress: string;
  public devices: Device[];

  constructor(
    level: string,
    name: string,
    ipAddress: string,
    serialNumber: string
  ) {
    this.serialNumber = serialNumber;
    this.level = level;
    this.name = name;
    this.ipAddress = ipAddress;
    this.devices = [];
  }
}
