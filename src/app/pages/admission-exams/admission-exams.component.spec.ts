import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionExamsComponent } from './admission-exams.component';

describe('AdmissionExamsComponent', () => {
  let component: AdmissionExamsComponent;
  let fixture: ComponentFixture<AdmissionExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
