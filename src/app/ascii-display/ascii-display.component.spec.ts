import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ASCIIDisplayComponent } from './ascii-display.component';

describe('ASCIIDisplayComponent', () => {
  let component: ASCIIDisplayComponent;
  let fixture: ComponentFixture<ASCIIDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ASCIIDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASCIIDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
