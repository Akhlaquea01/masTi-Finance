import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlybudgetSummaryComponent } from './monthlybudget-summary.component';

describe('MonthlybudgetSummaryComponent', () => {
  let component: MonthlybudgetSummaryComponent;
  let fixture: ComponentFixture<MonthlybudgetSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlybudgetSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlybudgetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
