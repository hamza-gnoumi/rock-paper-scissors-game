import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourturnComponent } from './yourturn.component';

describe('YourturnComponent', () => {
  let component: YourturnComponent;
  let fixture: ComponentFixture<YourturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
