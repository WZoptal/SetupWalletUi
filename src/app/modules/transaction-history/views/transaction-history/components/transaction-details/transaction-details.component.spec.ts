import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { TransactionDetailsComponent } from './transaction-details.component';

describe('TransactionDetailsComponent', () => {
  let component: TransactionDetailsComponent;
  let fixture: ComponentFixture<TransactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionDetailsComponent],
      imports: [ 
        RouterTestingModule,
        StoreModule.forRoot({}),
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Transaction details component created successfully', () => {
    expect(component).toBeTruthy();
  });


  it('Transaction details html created successfully', () => {
    const html = fixture.nativeElement;
    expect(html).toBeTruthy();
  });

});
