import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeHeadingComponent } from './welcome-heading.component';
import { CasePipe } from '../case.pipe';

describe('WelcomeHeadingComponent', () => {
  let component: WelcomeHeadingComponent;
  let fixture: ComponentFixture<WelcomeHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeHeadingComponent, CasePipe ]
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
