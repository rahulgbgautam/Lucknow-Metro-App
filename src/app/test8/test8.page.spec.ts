import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test8Page } from './test8.page';

describe('Test8Page', () => {
  let component: Test8Page;
  let fixture: ComponentFixture<Test8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
