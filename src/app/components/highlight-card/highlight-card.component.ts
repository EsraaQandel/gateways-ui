import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Device } from '../../models/device.model';

@Component({
  selector: 'app-highlight-card',
  templateUrl: './highlight-card.component.html',
  styleUrls: ['./highlight-card.component.scss'],
})
export class HighlightCardComponent {
  @Input() public title = 'List of Available Gateways';
  @Input() public showBack = false;
  @Output() public addGateway = new EventEmitter();

  constructor(private _router: Router) {}

  public routeToMain(): void {
    this._router.navigateByUrl('/gateways');
  }
}
