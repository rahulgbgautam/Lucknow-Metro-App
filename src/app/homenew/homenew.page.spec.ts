import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenewPage } from './homenew.page';

describe('HomenewPage', () => {
  let component: HomenewPage;
  let fixture: ComponentFixture<HomenewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomenewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
