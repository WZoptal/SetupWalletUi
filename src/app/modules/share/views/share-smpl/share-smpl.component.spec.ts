import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

import { ShareSmplComponent } from './share-smpl.component';


describe('ShareSmplComponent', () => {
  let component: ShareSmplComponent;
  let fixture: ComponentFixture<ShareSmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareSmplComponent ],
      imports: [ MatSnackBarModule, HttpClientTestingModule, StoreModule.forRoot({}), RouterTestingModule ],
      providers: [ SocialSharing ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareSmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
