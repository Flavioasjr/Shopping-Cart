import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListShoppingCart from './ListShoppingCart';

let productsInCart = [
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

const handleClickSubtract = jest.fn();
const handleClickAdd = jest.fn();
const handleClickRemove = jest.fn();

describe('ListShoppingCart component test', () => {
  describe('When productsInCart is empty', () => {
    beforeEach(() => {
      productsInCart = [];
      render(
        <ListShoppingCart
          productsInCart={productsInCart}
          handleClickSubtract={handleClickSubtract}
          handleClickAdd={handleClickAdd}
          handleClickRemove={handleClickRemove}
        />
      );
    });
    test('empty notice should be shown', () => {
      const emptyNotice = screen.getByRole('heading', {
        name: /your cart is empty/i,
      });

      expect(emptyNotice).toBeInTheDocument();
    });

    test('none product should be shown', () => {
      const img = screen.queryByRole('img');
      expect(img).not.toBeInTheDocument();
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
        },
      ];
      render(
        <ListShoppingCart
          productsInCart={productsInCart}
          handleClickSubtract={handleClickSubtract}
          handleClickAdd={handleClickAdd}
          handleClickRemove={handleClickRemove}
        />
      );
    });

    test('empty notice should not be shown', () => {
      const emptyNotice = screen.queryByRole('heading', {
        name: /your cart is empty/i,
      });

      expect(emptyNotice).not.toBeInTheDocument();
    });

    test('the images should be shown', () => {
      const image = screen.getByAltText(productsInCart[0].title);
      expect(image).toHaveAttribute('src', 'image.jpg');
    });

    test('the title should be shown', () => {
      const title1 = screen.getByText('clothes');
      expect(title1).toBeInTheDocument();
    });

    test('the price should be shown', () => {
      const price1 = screen.getByText(/10/i);
      expect(price1).toBeInTheDocument();
    });

    test('the icons should be shown', () => {
      const addIcon = screen.getByTestId('addIcon1');
      expect(addIcon).toBeInTheDocument();

      const subtractIcon = screen.getByTestId('subtractIcon1');
      expect(subtractIcon).toBeInTheDocument();
    });

    test('the input should be shown', () => {
      const input = screen.getByRole('spinbutton', { name: '1' });
      expect(input).toBeInTheDocument();
    });

    test('the button should be shown', () => {
      const button = screen.getByRole('button', {
        name: /remove/i,
      });
      expect(button).toBeInTheDocument();
    });

    describe('When the remove button is clicked', () => {
      test('The function handleClickRemove should be called', () => {
        const button = screen.getByRole('button', {
          name: /remove/i,
        });
        userEvent.click(button);
        expect(handleClickRemove).toBeCalled();
      });
    });

    describe('When the subtract icon is clicked', () => {
      test('The function handleClickSubtract should be called', () => {
        const subtractIcon = screen.getByTestId('subtractIcon1');
        userEvent.click(subtractIcon);
        expect(handleClickSubtract).toBeCalled();
      });
    });

    describe('When the add icon is clicked', () => {
      test('The function handleClickAdd should be called', () => {
        const addIcon = screen.getByTestId('addIcon1');
        userEvent.click(addIcon);
        expect(handleClickAdd).toBeCalled();
      });
    });
  });
});
