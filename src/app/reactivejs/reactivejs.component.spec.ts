import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivejsComponent } from './reactivejs.component';

describe('ReactivejsComponent', () => {
  let component: ReactivejsComponent;
  let fixture: ComponentFixture<ReactivejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
