import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalerFraudeComponent } from './signaler-fraude.component';

describe('SignalerFraudeComponent', () => {
  let component: SignalerFraudeComponent;
  let fixture: ComponentFixture<SignalerFraudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalerFraudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalerFraudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
