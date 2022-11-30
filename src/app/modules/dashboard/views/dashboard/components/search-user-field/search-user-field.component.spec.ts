import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserFieldComponent } from './search-user-field.component';

describe('SearchUserFieldComponent', () => {
  let component: SearchUserFieldComponent;
  let fixture: ComponentFixture<SearchUserFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchUserFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
