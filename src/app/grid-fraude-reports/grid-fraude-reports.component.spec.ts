import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFraudeReportsComponent } from './grid-fraude-reports.component';

describe('GridFraudeReportsComponent', () => {
  let component: GridFraudeReportsComponent;
  let fixture: ComponentFixture<GridFraudeReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridFraudeReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridFraudeReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
