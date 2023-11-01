import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDashbordComponent } from './school-dashbord.component';

describe('SchoolDashbordComponent', () => {
  let component: SchoolDashbordComponent;
  let fixture: ComponentFixture<SchoolDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolDashbordComponent]
    });
    fixture = TestBed.createComponent(SchoolDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
