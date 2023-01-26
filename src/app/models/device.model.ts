import { Status } from "../enum/device-status.enum";

export interface Device {
  uid: string;
  vendor: string;
  creationDate: Date;
  status: Status;
}
