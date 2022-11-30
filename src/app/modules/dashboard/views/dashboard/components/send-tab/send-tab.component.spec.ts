import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';

import { SendTabComponent } from './send-tab.component';

describe('SendTabComponent', () => {
  let component: SendTabComponent;
  let fixture: ComponentFixture<SendTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendTabComponent ],
      imports: [ 
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        MatSnackBarModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
