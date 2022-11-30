import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WalletAddressComponent } from './wallet-address.component';

describe('WalletAddressComponent', () => {
  let component: WalletAddressComponent;
  let fixture: ComponentFixture<WalletAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletAddressComponent ],
      imports: [ StoreModule.forRoot([]), 
        HttpClientTestingModule, 
        MatSnackBarModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
