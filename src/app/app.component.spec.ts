import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { render, screen, fireEvent } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('INFO: Prefix meaning', () => {
    console.log(' prefix JT is for Jest\n', 'prefix TL is for testingLibrary\n', 'prefix ST is for SpecTator\n');
  });
  // este esta textual lo dejo jasmine/karma
  it('JT: should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`JT: should have as title 'atlantic'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('atlantic');
  });

  it('JT: should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('atlantic app is running!');
  });

  test('TL: should render counter', async () => {
    // const { getByText, queryByLabelText} = await render(AppComponent);
    // getByText('texto loco');
    await render(AppComponent, {
      componentProperties: { titleText: 'texto de prueva' },
    });
    expect(screen.getByText('texto de prueva'));
  });
});
