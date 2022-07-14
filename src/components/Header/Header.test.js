import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

const showShoppingCart = jest.fn();
const showImgHome = false;
const shoppinCartIsShown = false;
const sizeProductsInCart = 0;

describe('Header Component tests', () => {
  describe('When the header is loaded', () => {
    test('the shop link should be shown', () => {
      render(
        <BrowserRouter>
          <Header
            showShoppingCart={showShoppingCart}
            showImgHome={showImgHome}
            shoppinCartIsShown={shoppinCartIsShown}
            sizeProductsInCart={sizeProductsInCart}
          />
        </BrowserRouter>
      );
      const linkShop = screen.getByRole('link', { name: 'Shop' });
      expect(linkShop).toBeInTheDocument();
      expect(linkShop.href).toBe('http://localhost/shop');
    });

    test('the about link should be shown', () => {
      render(
        <BrowserRouter>
          <Header
            showShoppingCart={showShoppingCart}
            showImgHome={showImgHome}
            shoppinCartIsShown={shoppinCartIsShown}
            sizeProductsInCart={sizeProductsInCart}
          />
        </BrowserRouter>
      );
      const linkAbout = screen.getByRole('link', { name: 'About' });
      expect(linkAbout).toBeInTheDocument();
      expect(linkAbout.href).toBe('http://localhost/about');
    });

    test('the title link should be shown', () => {
      render(
        <BrowserRouter>
          <Header
            showShoppingCart={showShoppingCart}
            showImgHome={showImgHome}
            shoppinCartIsShown={shoppinCartIsShown}
            sizeProductsInCart={sizeProductsInCart}
          />
        </BrowserRouter>
      );
      const linkTitle = screen.getByRole('link', { name: 'AMAZING STORE' });
      expect(linkTitle).toBeInTheDocument();
      expect(linkTitle.href).toBe('http://localhost/');
    });

    test('the icon button should be shown', () => {
      render(
        <BrowserRouter>
          <Header
            showShoppingCart={showShoppingCart}
            showImgHome={showImgHome}
            shoppinCartIsShown={shoppinCartIsShown}
            sizeProductsInCart={sizeProductsInCart}
          />
        </BrowserRouter>
      );
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('When the button clicked', () => {
    test('the showShoppingCart function should be called', () => {
      render(
        <BrowserRouter>
          <Header
            showShoppingCart={showShoppingCart}
            showImgHome={showImgHome}
            shoppinCartIsShown={shoppinCartIsShown}
            sizeProductsInCart={sizeProductsInCart}
          />
        </BrowserRouter>
      );

      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(showShoppingCart).toBeCalled();
    });
  });
});
