import { createReducer, on, Action } from '@ngrx/store';

import * as GatewaysActions from './gateways.actions';
import { Gateway } from '../models/gateway.model';

export const GATEWAYS_FEATURE_KEY = 'gateways';

export interface GatewaysState {
  gateways: Gateway[];
  error?: string | null;
  selectedGateway?: Gateway;
  loading: boolean;
  loaded: boolean;
}

export interface GatewaysPartialState {
  readonly [GATEWAYS_FEATURE_KEY]: GatewaysState;
}

export const initialState: GatewaysState = {
  // set initial required properties
  gateways: [],
  loading: true,
  loaded: false,
};

const GatewayReducer = createReducer(
  initialState,
  on(GatewaysActions.loadGateways, (state) => ({
    ...state,
    loaded: false,
    error: null,
    gateways: [],
  })),

  on(GatewaysActions.loadGatewaysSuccess, (state, { gateways }) => ({
    ...state,
    loaded: true,
    gateways,
  })),

  on(GatewaysActions.loadGatewaysFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
    gateways: [],
  })),

  on(GatewaysActions.loadSingleGateway, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(GatewaysActions.loadSingleGatewaySuccess, (state, { gateway }) => ({
    ...state,
    loaded: true,
    selectedGateway: gateway,
  })),

  on(GatewaysActions.loadSingleGatewayFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),

  on(GatewaysActions.removeDevice, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(GatewaysActions.removeDeviceSuccess, (state, { gateway }) => ({
    ...state,
    loaded: true,
    selectedGateway: gateway,
  })),

  on(GatewaysActions.removeDeviceFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),

  on(GatewaysActions.addGateway, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(GatewaysActions.addGatewaySuccess, (state, { gateways }) => ({
    ...state,
    loaded: true,
    gateways,
  })),

  on(GatewaysActions.addGatewayFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),

  on(GatewaysActions.addDevice, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(GatewaysActions.addDeviceSuccess, (state, { gateway }) => ({
    ...state,
    loaded: true,
    selectedGateway: gateway,
  })),

  on(GatewaysActions.addDeviceFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: GatewaysState | undefined, action: Action) {
  return GatewayReducer(state, action);
}
