import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ListShop from './ListShop';

const productsData = [
  {
    id: 1,
    image: 'image.jpg',
    title: 'clothes',
    price: 10,
    category: 'warm clothing',
    description: 'description',
  },
  {
    id: 2,
    image: 'image2.jpg',
    title: 'clothes2',
    price: 20,
    category: 'warm clothing',
    description: 'description',
  },
];
const addProductInCart = jest.fn();

describe('ListShop component tests', () => {
  describe('When the ListShop is loaded', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <ListShop
            productsData={productsData}
            addProductInCart={addProductInCart}
          />
        </BrowserRouter>
      );
    });

    test('the images should be shown', () => {
      const image = screen.getByAltText(productsData[0].title);
      expect(image).toHaveAttribute('src', 'image.jpg');

      const image2 = screen.getByAltText(productsData[1].title);
      expect(image2).toHaveAttribute('src', 'image2.jpg');
    });

    test('the product 1 link should be shown', () => {
      const linkProduct1 = screen.getByRole('link', { name: 'clothes' });
      expect(linkProduct1).toBeInTheDocument();
      expect(linkProduct1.href).toBe('http://localhost/shop/1');
    });

    test('the product 2 link should be shown', () => {
      const linkProduct2 = screen.getByRole('link', { name: 'clothes2' });
      expect(linkProduct2).toBeInTheDocument();
      expect(linkProduct2.href).toBe('http://localhost/shop/2');
    });

    test('the title should be shown', () => {
      const title1 = screen.getByText('clothes');
      expect(title1).toBeInTheDocument();

      const title2 = screen.getByText('clothes2');
      expect(title2).toBeInTheDocument();
    });

    test('the price should be shown', () => {
      const price1 = screen.getByText(/10/i);
      expect(price1).toBeInTheDocument();

      const price2 = screen.getByText(/20/i);
      expect(price2).toBeInTheDocument();
    });

    test('the button should be shown', () => {
      const button1 = screen.getByTitle(/1/i);
      expect(button1).toBeInTheDocument();

      const button2 = screen.getByTitle(/2/i);
      expect(button2).toBeInTheDocument();
    });
  });

  describe('When the button is clicked', () => {
    test('The function addProductInCart should be called', () => {
      render(
        <BrowserRouter>
          <ListShop
            productsData={productsData}
            addProductInCart={addProductInCart}
          />
        </BrowserRouter>
      );

      const button1 = screen.getByTitle(/1/i);
      userEvent.click(button1);
      expect(addProductInCart).toBeCalled();
    });

    test('The function addProductInCart should be called', () => {
      render(
        <BrowserRouter>
          <ListShop
            productsData={productsData}
            addProductInCart={addProductInCart}
          />
        </BrowserRouter>
      );

      const button2 = screen.getByTitle(/2/i);
      userEvent.click(button2);
      expect(addProductInCart).toBeCalled();
    });
  });
});
