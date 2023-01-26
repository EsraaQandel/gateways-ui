import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GATEWAYS_FEATURE_KEY, GatewaysState } from './gateways.reducer';

// Lookup the 'Gateways' feature state managed by NgRx
export const getGatewaysState =
  createFeatureSelector<GatewaysState>(GATEWAYS_FEATURE_KEY);

export const gateways = createSelector(
  getGatewaysState,
  (state: GatewaysState) => state.gateways
);

export const selectedGateway = createSelector(
  getGatewaysState,
  (state: GatewaysState) => state.selectedGateway
);

export const loaded = createSelector(
  getGatewaysState,
  (state: GatewaysState) => state.loaded
);

export const error = createSelector(
  getGatewaysState,
  (state: GatewaysState) => state.error
);
