import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New3Page } from './new3.page';

describe('New3Page', () => {
  let component: New3Page;
  let fixture: ComponentFixture<New3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
