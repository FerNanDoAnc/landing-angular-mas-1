import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonPageComponent } from './python-page.component';

describe('PythonPageComponent', () => {
  let component: PythonPageComponent;
  let fixture: ComponentFixture<PythonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythonPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PythonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
