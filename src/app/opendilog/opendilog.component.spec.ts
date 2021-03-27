import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendilogComponent } from './opendilog.component';

describe('OpendilogComponent', () => {
  let component: OpendilogComponent;
  let fixture: ComponentFixture<OpendilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpendilogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpendilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
