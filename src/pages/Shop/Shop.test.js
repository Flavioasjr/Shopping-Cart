import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Shop from './Shop';

const productsData = [
  {
    id: 1,
    image: 'image.jpg',
    title: 'clothes',
    price: 10,
    category: 'warm clothing',
    description: 'description',
  },
];
const hideImgHome = jest.fn();
const shoppinCartIsShown = false;
const addProductInCart = jest.fn();

jest.mock('../../components/ListShop/ListShop', () => {
  function ListShop() {
    return <div data-testid="listShop" />;
  }
  return ListShop;
});

describe('Shop component test', () => {
  describe('When Shop is loaded', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Shop
            productsData={productsData}
            hideImgHome={hideImgHome}
            shoppinCartIsShown={shoppinCartIsShown}
            addProductInCart={addProductInCart}
          />
        </BrowserRouter>
      );
    });
    test('Title should be shown', () => {
      const title = screen.getByRole('heading', {
        name: /our products/i,
      });
      expect(title).toBeInTheDocument();
    });

    test('ListShop component should be called', () => {
      const listShop = screen.queryByTestId('listShop');
      expect(listShop).toBeInTheDocument();
    });
  });
});
