import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttprequestPage } from './httprequest.page';

describe('HttprequestPage', () => {
  let component: HttprequestPage;
  let fixture: ComponentFixture<HttprequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttprequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttprequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
