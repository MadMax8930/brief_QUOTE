import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorLoggedInComponent } from './generator-logged-in.component';

describe('GeneratorLoggedInComponent', () => {
  let component: GeneratorLoggedInComponent;
  let fixture: ComponentFixture<GeneratorLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorLoggedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
