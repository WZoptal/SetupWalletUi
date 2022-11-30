import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WalkThroughGuard } from './walk-through.guard';

describe('WalkThroughGuard', () => {
  let guard: WalkThroughGuard;
  let fixture: ComponentFixture<WalkThroughGuard>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkThroughGuard ],
      imports: [ RouterTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkThroughGuard);
    guard = fixture.componentInstance;
    fixture.detectChanges();
  })

  // it('should be created', () => {
  //   expect(guard).toBeTruthy();
  // });
});
