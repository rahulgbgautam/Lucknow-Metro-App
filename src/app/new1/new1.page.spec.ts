import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New1Page } from './new1.page';

describe('New1Page', () => {
  let component: New1Page;
  let fixture: ComponentFixture<New1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
