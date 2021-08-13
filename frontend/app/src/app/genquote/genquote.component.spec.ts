import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenquoteComponent } from './genquote.component';

describe('GenquoteComponent', () => {
  let component: GenquoteComponent;
  let fixture: ComponentFixture<GenquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
