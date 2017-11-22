import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { WelcomeHeadingComponent } from './welcome-heading/welcome-heading.component';
import { ServiceConfigComponent } from './service-config/service-config.component';
import { CasePipe } from './case.pipe';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, AppRoutingModule ],
      declarations: [
        AppComponent, WelcomeHeadingComponent, ServiceConfigComponent, CasePipe
      ],
      providers: [ { provide: APP_BASE_HREF, useValue: '/'} ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Gökalp\'in Evi'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.appTitle).toEqual('Gökalp\'in Evi');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('gökalp\'in evi');
  }));
});
