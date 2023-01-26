import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexModule } from '@angular/flex-layout';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GatewayComponent } from './components/gateway/gateway.component';
import { DeviceComponent } from './components/device/device.component';
import { DeviceDeleteDialog } from './components/device-delete-dialog/device-delete-dialog.component';
import { GatewayEffects } from './+state/gateways.effect';
import * as fromGateway from './+state/gateways.reducer';
import { GetwaysPageComponent } from './pages/getways/getways-page.component';
import { GatewayPageComponent } from './pages/gateway/gateway-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import { AddGatewayDialog } from './components/add-gateway-dialog/add-gateway-dialog.component';
import { AddDeviceDialogComponent } from './components/add-device-dialog/add-device-dialog.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    GatewayComponent,
    DeviceComponent,
    DeviceDeleteDialog,
    GetwaysPageComponent,
    GatewayPageComponent,
    HighlightCardComponent,
    AddGatewayDialog,
    AddDeviceDialogComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    FlexModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature(
      fromGateway.GATEWAYS_FEATURE_KEY,
      fromGateway.reducer
    ),
    EffectsModule.forFeature([GatewayEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
