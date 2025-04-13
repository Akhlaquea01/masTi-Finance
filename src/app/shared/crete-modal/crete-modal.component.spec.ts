import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteModalComponent } from './crete-modal.component';

describe('CreteModalComponent', () => {
  let component: CreteModalComponent;
  let fixture: ComponentFixture<CreteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
