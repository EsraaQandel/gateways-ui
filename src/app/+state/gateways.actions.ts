import { createAction, props } from '@ngrx/store';

import { Device } from '../models/device.model';
import { Gateway } from '../models/gateway.model';

export const loadGateways = createAction('[Gateways Page] Init');

export const loadGatewaysSuccess = createAction(
  '[Gateways/API] Load Gateways Success',
  props<{ gateways: Gateway[] }>()
);

export const loadGatewaysFailure = createAction(
  '[Gateways/API] Load Gateways Failure',
  props<{ error: string }>()
);

export const loadSingleGateway = createAction(
  '[Gateway Page] Init',
  props<{ serialNumber: string }>()
);

export const loadSingleGatewaySuccess = createAction(
  '[Gateway/API] Load Gateway Success',
  props<{ gateway: Gateway }>()
);

export const loadSingleGatewayFailure = createAction(
  '[Gateway/API] Load Gateway Failure',
  props<{ error: string }>()
);

export const addGateway = createAction(
  '[Gateway Page] Add Gateway',
  props<{ gateway: Gateway }>()
);

export const addGatewaySuccess = createAction(
  '[Gateway/API] Add Gateway Success',
  props<{ gateways: Gateway[] }>()
);

export const addGatewayFailure = createAction(
  '[Gateway/API] Add Gateway Failure',
  props<{ error: string }>()
);

export const addDevice = createAction(
  '[Gateway Page] Add Device',
  props<{ serialNumber: string; device: Device }>()
);

export const addDeviceSuccess = createAction(
  '[Gateway/API] Add Device Success',
  props<{ gateway: Gateway }>()
);

export const addDeviceFailure = createAction(
  '[Gateway/API] Add Device Failure',
  props<{ error: string }>()
);

export const removeDevice = createAction(
  '[Gateway Page] Remove Device',
  props<{ serialNumber: string; deviceId: string }>()
);

export const removeDeviceSuccess = createAction(
  '[Gateway/API] Remove Device Success',
  props<{ gateway: Gateway }>()
);

export const removeDeviceFailure = createAction(
  '[Gateway/API] Remove Device Failure',
  props<{ error: string }>()
);
