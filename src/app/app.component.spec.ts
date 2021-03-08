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


  test('TL: should render counter', async () => {

    // const { getByText, queryByLabelText} = await render(AppComponent);
    // getByText('texto loco');

    await render(AppComponent, {
      componentProperties: { titleText: 'texto de prueva' },
    });
    expect(screen.getByText('texto de prueva'));
  });
});
