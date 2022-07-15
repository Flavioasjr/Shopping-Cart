import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShoppingCart from './ShoppingCart';

const hideShoppingCart = jest.fn();
let productsInCart = [];
const addQuantity = jest.fn();
const subtractQuantity = jest.fn();
const removeProductInCart = jest.fn();

jest.mock('../ListShoppingCart/ListShoppingCart', () => {
  function ListShoppingCart() {
    return <div data-testid="listShoppingCart" />;
  }
  return ListShoppingCart;
});

describe('ShoppingCart component test', () => {
  describe('When productsInCart is empty', () => {
    beforeEach(() => {
      productsInCart = [];
      render(
        <ShoppingCart
          hideShoppingCart={hideShoppingCart}
          productsInCart={productsInCart}
          addQuantity={addQuantity}
          subtractQuantity={subtractQuantity}
          removeProductInCart={removeProductInCart}
        />
      );
    });

    test('Title Cart should be shown', () => {
      const title = screen.getByRole('heading', {
        name: 'CART',
      });
      expect(title).toBeInTheDocument();
    });

    test('Icon should be shown', () => {
      const icon = screen.getByTitle('icon-close');
      expect(icon).toBeInTheDocument();
    });

    test('ListShoppingCart component should be called', () => {
      const listShoppingCart = screen.queryByTestId('listShoppingCart');
      expect(listShoppingCart).toBeInTheDocument();
    });

    test('Button should not be shown', () => {
      const button = screen.queryByRole('button');
      expect(button).not.toBeInTheDocument();
    });

    describe('When icon is clicked', () => {
      test('The hideShoppingCart should be called', () => {
        const icon = screen.getByTitle('icon-close');
        userEvent.click(icon);
        expect(hideShoppingCart).toBeCalled();
      });
    });
  });

  describe('When productsInCart is not empty', () => {
    beforeEach(() => {
      productsInCart = [
        {
          id: 1,
          image: 'image.jpg',
          title: 'clothes',
          price: 10,
          category: 'warm clothing',
          description: 'description',
          quantity: 1,
        },
      ];
      render(
        <ShoppingCart
          hideShoppingCart={hideShoppingCart}
          productsInCart={productsInCart}
          addQuantity={addQuantity}
          subtractQuantity={subtractQuantity}
          removeProductInCart={removeProductInCart}
        />
      );
    });

    test('Button should be shown', () => {
      const button = screen.queryByRole('button', { name: /buy now/i });
      expect(button).toBeInTheDocument();
    });
  });
});
