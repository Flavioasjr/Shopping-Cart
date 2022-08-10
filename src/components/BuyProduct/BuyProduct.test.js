import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import BuyProduct from './BuyProduct';
import renderWithProviders from '../../utils/test-utils';

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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
  useRouteMatch: () => ({ url: '/shop/id' }),
}));

describe('BuyProduct component tests', () => {
  describe('When the BuyProduct is loaded', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/shop/1']}>
          {/* <BuyProduct
            productsData={productsData}
            hideImgHome={hideImgHome}
            shoppinCartIsShown={shoppinCartIsShown}
            addProductInCart={addProductInCart}
          /> */}
          {renderWithProviders(<BuyProduct hideImgHome={hideImgHome} />, {
            preloadedState: {
              product: productsData,
              productStatus: 'succeeded',
              shouldShowShoppingCart: false,
            },
          })}
        </MemoryRouter>
      );
    });
    test('the image should be shown', () => {
      const image = screen.getByAltText(productsData[0].title);
      expect(image).toHaveAttribute('src', 'image.jpg');
    });

    // test('the title should be shown', () => {
    //   const title = screen.getByRole('heading', { name: /clothes/i });
    //   expect(title).toBeInTheDocument();
    // });

    // test('the price should be shown', () => {
    //   const price = screen.getByText(/10/i);
    //   expect(price).toBeInTheDocument();
    // });

    // test('the category should be shown', () => {
    //   const category = screen.getByText(/warm clothing/i);
    //   expect(category).toBeInTheDocument();
    // });

    // test('the description should be shown', () => {
    //   const description = screen.getByText(/description/i);
    //   expect(description).toBeInTheDocument();
    // });

    // test('the button should be shown', () => {
    //   const button = screen.getByRole('button', {
    //     name: /add to cart/i,
    //   });
    //   expect(button).toBeInTheDocument();
    // });
  });

  // describe('When the button is clicked', () => {
  //   test('The function addProductInCart should be called', () => {
  //     render(
  //       <MemoryRouter initialEntries={['/shop/1']}>
  //         <BuyProduct
  //           productsData={productsData}
  //           hideImgHome={hideImgHome}
  //           shoppinCartIsShown={shoppinCartIsShown}
  //           addProductInCart={addProductInCart}
  //         />
  //       </MemoryRouter>
  //     );

  //     const button = screen.getByRole('button', {
  //       name: /add to cart/i,
  //     });

  //     userEvent.click(button);
  //     expect(addProductInCart).toBeCalled();
  //   });
  // });
});
