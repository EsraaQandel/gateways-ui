import { Injectable } from '@angular/core';

import { GatewayServiceMock } from './gateway.service.mock';

@Injectable({ providedIn: 'root' })
export class GatewayService extends GatewayServiceMock {}
