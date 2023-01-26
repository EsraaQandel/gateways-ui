import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { GatewayService } from '../services/gateway.service';
import * as GatewaysActions from './gateways.actions';

const ERROR = 'Something went wrong';

@Injectable()
export class GatewayEffects {
  loadGateways$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GatewaysActions.loadGateways),
      switchMap((action) =>
        this.service.getGateways().pipe(
          map((gateways) => GatewaysActions.loadGatewaysSuccess({ gateways })),
          catchError(() =>
            of(GatewaysActions.loadGatewaysFailure({ error: ERROR }))
          )
        )
      )
    )
  );

  removeDevice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GatewaysActions.removeDevice),
      switchMap((action) =>
        this.service.removeDevice(action.serialNumber, action.deviceId).pipe(
          map((gateway) =>
            GatewaysActions.removeDeviceSuccess({
              gateway,
            })
          ),
          catchError(() =>
            of(GatewaysActions.removeDeviceFailure({ error: ERROR }))
          )
        )
      )
    )
  );

  addGateway$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GatewaysActions.addGateway),
      switchMap((action) =>
        this.service.addGateway(action.gateway).pipe(
          map((gateways) =>
            GatewaysActions.addGatewaySuccess({
              gateways,
            })
          ),
          catchError(() => {
            this._snackBar.open(ERROR, 'x', {
              duration: 3000,
              panelClass: ['alert-snackbar'],
              verticalPosition: 'bottom',
            });
            return of(GatewaysActions.addGatewayFailure({ error: ERROR }));
          })
        )
      )
    )
  );

  addDevice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GatewaysActions.addDevice),
      switchMap((action) =>
        this.service.addDevice(action.serialNumber, action.device).pipe(
          map((gateway) =>
            GatewaysActions.addDeviceSuccess({
              gateway,
            })
          ),
          catchError(() =>
            of(GatewaysActions.addDeviceFailure({ error: ERROR }))
          )
        )
      )
    )
  );

  loadSingleGateway$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GatewaysActions.loadSingleGateway),
      switchMap((action) =>
        this.service.getGateway(action.serialNumber).pipe(
          map((gateway) =>
            GatewaysActions.loadSingleGatewaySuccess({
              gateway,
            })
          ),
          catchError(() =>
            of(GatewaysActions.loadSingleGatewayFailure({ error: ERROR }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private _snackBar: MatSnackBar,
    private service: GatewayService
  ) {}
}
