import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamdetailComponent } from './dreamdetail.component';

describe('DreamdetailComponent', () => {
  let component: DreamdetailComponent;
  let fixture: ComponentFixture<DreamdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
