import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SComponentComponent } from './s-component.component';

describe('SComponentComponent', () => {
  let component: SComponentComponent;
  let fixture: ComponentFixture<SComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
