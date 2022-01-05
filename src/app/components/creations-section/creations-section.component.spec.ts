import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsSectionComponent } from './creations-section.component';

describe('CreationsSectionComponent', () => {
  let component: CreationsSectionComponent;
  let fixture: ComponentFixture<CreationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
