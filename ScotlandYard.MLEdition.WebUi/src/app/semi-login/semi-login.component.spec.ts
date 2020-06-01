import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiLoginComponent } from './semi-login.component';

describe('SemiLoginComponent', () => {
  let component: SemiLoginComponent;
  let fixture: ComponentFixture<SemiLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
