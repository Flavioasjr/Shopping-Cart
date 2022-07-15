import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from './About';

const hideImgHome = jest.fn();
let shoppinCartIsShown = false;
describe('About component test', () => {
  describe('When About is loaded', () => {
    beforeEach(() => {
      render(
        <About
          hideImgHome={hideImgHome}
          shoppinCartIsShown={shoppinCartIsShown}
        />
      );
    });

    test('title should be shown', () => {
      const title = screen.getByRole('heading', { name: /OUR STORY/i });
      expect(title).toBeInTheDocument();
    });

    test('subtitle should be shown', () => {
      const subtitle = screen.getByText(
        /we exist for the “clothes in progress”\. ever-evolving and growing, striving to be better every\./i
      );
      expect(subtitle).toBeInTheDocument();
    });

    test('The Now image should be shown', () => {
      const img = screen.getByAltText('The now');
      expect(img).toBeInTheDocument();
    });

    test('The Now title should be shown', () => {
      const title = screen.getByRole('heading', { name: /THE NOW/i });
      expect(title).toBeInTheDocument();
    });

    test('The Feeling title should be shown', () => {
      const title = screen.getByRole('heading', { name: /THE FEELING/i });
      expect(title).toBeInTheDocument();
    });

    test('The Feeling image should be shown', () => {
      const img = screen.getByAltText('The feeling');
      expect(img).toBeInTheDocument();
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
        <About
          hideImgHome={hideImgHome}
          shoppinCartIsShown={shoppinCartIsShown}
        />
      );
      const darkBackground = screen.getByTitle('dark-background');
      expect(darkBackground).toBeInTheDocument();
    });
  });
});
