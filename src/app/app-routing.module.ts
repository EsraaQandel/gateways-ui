import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GatewayPageComponent } from './pages/gateway/gateway-page.component';
import { GetwaysPageComponent } from './pages/getways/getways-page.component';

export const routes: Routes = [
  { path: 'gateways', component: GetwaysPageComponent },
  { path: 'gateway/:id', component: GatewayPageComponent },
  { path: '**', redirectTo: '/gateways' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
