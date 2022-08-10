import useProducts from './useProducts';

export default function useProductById(id) {
  const { data: productsData } = useProducts();

  if (productsData) {
    return productsData.find((productById) => productById.id === Number(id));
  }

  return null;
}
