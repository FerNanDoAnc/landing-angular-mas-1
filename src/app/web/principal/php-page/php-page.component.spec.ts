import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpPageComponent } from './php-page.component';

describe('PhpPageComponent', () => {
  let component: PhpPageComponent;
  let fixture: ComponentFixture<PhpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhpPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
