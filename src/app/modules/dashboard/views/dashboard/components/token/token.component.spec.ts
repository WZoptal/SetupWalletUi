import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenComponent } from './token.component';
import { SmplChainWalletService } from '@smplfinance/wallet-core';
import { of } from 'rxjs';

describe('TokenComponent', () => {
  let component: TokenComponent;
  let fixture: ComponentFixture<TokenComponent>;

  beforeEach(async () => {
    const smplServiceSpy = jasmine.createSpyObj('SmplChainWalletService', ['getBalance']); 
    smplServiceSpy.getBalance.and.returnValue(of(['']))

    await TestBed.configureTestingModule({
      declarations: [TokenComponent],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        HttpClientTestingModule
      ],
      providers: [{provide: SmplChainWalletService, useValue: smplServiceSpy}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
