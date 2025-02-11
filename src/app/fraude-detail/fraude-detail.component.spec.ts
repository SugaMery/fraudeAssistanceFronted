import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudeDetailComponent } from './fraude-detail.component';

describe('FraudeDetailComponent', () => {
  let component: FraudeDetailComponent;
  let fixture: ComponentFixture<FraudeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraudeDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FraudeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
