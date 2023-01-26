import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GatewayFacade } from 'src/app/+state/gateways.facade';
import { AddGatewayDialog } from './add-gateway-dialog.component';
import SpyObj = jasmine.SpyObj;
describe('AddGatewayDialog', () => {
  let fixture: ComponentFixture<AddGatewayDialog>;
  let component: AddGatewayDialog;
  let facadeSpy: SpyObj<GatewayFacade>;
  beforeEach(async () => {
    facadeSpy = jasmine.createSpyObj(['']);
    await TestBed.configureTestingModule({
      declarations: [AddGatewayDialog],
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        NoopAnimationsModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: GatewayFacade, useValue: facadeSpy },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { uid: 'some' } },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AddGatewayDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the add button disbaled by default`, () => {
    const addButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('button.mat-primary');
    expect(addButton.disabled).toBeTruthy();
  });

  it(`should have the add button enabled when form is valid`, () => {
    component.form.setValue({
      level: '1',
      name: 'some name',
      ipAddress: '1.1.1.1',
    });
    fixture.detectChanges();
    const addButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('button.mat-primary');
    expect(addButton.disabled).toBeFalsy();
  });

  it(`should have the add button enabled when ip address is not valid`, () => {
    component.form.setValue({
      level: '1',
      name: 'some name',
      ipAddress: '1.1.1.300',
    });
    fixture.detectChanges();
    const addButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('button.mat-primary');
    expect(addButton.disabled).toBeTruthy();
  });
});
