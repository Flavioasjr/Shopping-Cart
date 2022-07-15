/* eslint-disable no-unused-vars */
import fetchProducts from './fetchProducts';

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

const fetchMock = jest
  .spyOn(global, 'fetch')
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve(productsData) })
  );

describe('fetchProducts test', () => {
  describe('When fetchProducts is solicited', () => {
    test('An array should be returned', async () => {
      const products = await fetchProducts();
      expect(fetchMock).toHaveBeenCalledWith(
        'https://fakestoreapi.com/products'
      );
      // expect(products).toEqual(1);
    });
  });

  describe('When the promise is rejected', () => {
    test('Then the fuction should return null', async () => {
      fetch.mockRejectedValueOnce(new Error('Error'));
      const products = await fetchProducts();
      expect(products).toEqual(null);
    });
  });
});
