import { useQuery } from 'react-query';

export default function useProductById(id) {
  return useQuery(['product'], async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    return product;
  });
}
