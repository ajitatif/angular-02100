import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeHeadingComponent } from './welcome-heading.component';

describe('WelcomeHeadingComponent', () => {
  let component: WelcomeHeadingComponent;
  let fixture: ComponentFixture<WelcomeHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
