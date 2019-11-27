import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test10Page } from './test10.page';

describe('Test10Page', () => {
  let component: Test10Page;
  let fixture: ComponentFixture<Test10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
