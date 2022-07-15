import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const displayImgHome = jest.fn();
let shoppinCartIsShown = false;

describe('Home component test', () => {
  describe('When Home is loaded', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Home
            displayImgHome={displayImgHome}
            shoppinCartIsShown={shoppinCartIsShown}
          />
        </BrowserRouter>
      );
    });

    test('title should be shown', () => {
      const title = screen.getByRole('heading', { name: /Good clothes/i });
      expect(title).toBeInTheDocument();
    });

    test('button should be shown', () => {
      const button = screen.getByRole('button', { name: /see our products/i });
      expect(button).toBeInTheDocument();
    });

    test('link should be shown', () => {
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
    });

    test('darkBackground should not be shown', () => {
      const darkBackground = screen.queryByTitle('dark-background');
      expect(darkBackground).not.toBeInTheDocument();
    });
  });

  describe('When shoppinCartIsShown is true', () => {
    test('darkBackground should be shown', () => {
      shoppinCartIsShown = true;
      render(
        <BrowserRouter>
          <Home
            displayImgHome={displayImgHome}
            shoppinCartIsShown={shoppinCartIsShown}
          />
        </BrowserRouter>
      );

      const darkBackground = screen.getByTitle('dark-background');
      expect(darkBackground).toBeInTheDocument();
    });
  });
});
