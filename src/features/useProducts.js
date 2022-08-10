import { useQuery } from 'react-query';

export default function useProducts() {
  return useQuery(['products'], async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const productsFilter = products.filter(
      (product) => product.category !== 'electronics'
    );
    return productsFilter;
  });
}
