import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1productComponent } from './s1product.component';

describe('S1productComponent', () => {
  let component: S1productComponent;
  let fixture: ComponentFixture<S1productComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [S1productComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S1productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
