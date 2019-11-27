import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test7Page } from './test7.page';

describe('Test7Page', () => {
  let component: Test7Page;
  let fixture: ComponentFixture<Test7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
