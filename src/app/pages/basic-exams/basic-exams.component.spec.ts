import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicExamsComponent } from './basic-exams.component';

describe('BasicExamsComponent', () => {
  let component: BasicExamsComponent;
  let fixture: ComponentFixture<BasicExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
