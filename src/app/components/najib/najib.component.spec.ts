import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NajibComponent } from './najib.component';

describe('NajibComponent', () => {
  let component: NajibComponent;
  let fixture: ComponentFixture<NajibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NajibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NajibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
