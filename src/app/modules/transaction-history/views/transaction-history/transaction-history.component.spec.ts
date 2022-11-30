import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { TransactionHistoryComponent } from './transaction-history.component';

describe('TransactionHistoryComponent', () => {
  let component: TransactionHistoryComponent;
  let fixture: ComponentFixture<TransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionHistoryComponent],
      imports:[RouterTestingModule, StoreModule.forRoot({}), HttpClientTestingModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Transaction history component created successfully', () => {
    expect(component).toBeTruthy();
  });

  it('Transaction history HTML working fine', () => {
    const html = fixture.nativeElement;
    expect(html).toBeTruthy();
  });


  
  it('Transaction history Page Loaded successfully', () => {
    const html = fixture.debugElement.nativeElement.querySelector('#transactionhistorytitle');
    expect(html.innerHTML).toBe('Transaction History');    
  });


    
  it('Transaction history table loaded', () => {
    const tableRow = fixture.debugElement.nativeElement.querySelector('.tableHead');
    const transactions$ = component.smplChainService.getTransactionHistory("");
    transactions$.subscribe(transactions => {
      if (transactions.length > 0) {
        expect(tableRow.innerHTML).toBe("Wallet Address");    
      }  
    });
  });


});
