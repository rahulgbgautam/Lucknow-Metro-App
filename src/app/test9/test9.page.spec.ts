import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test9Page } from './test9.page';

describe('Test9Page', () => {
  let component: Test9Page;
  let fixture: ComponentFixture<Test9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
