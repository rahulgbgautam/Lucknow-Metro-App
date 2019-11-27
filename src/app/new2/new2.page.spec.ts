import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New2Page } from './new2.page';

describe('New2Page', () => {
  let component: New2Page;
  let fixture: ComponentFixture<New2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
