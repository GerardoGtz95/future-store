import { ProductView } from 'app/componentes/product/ProductView';
import { getProducts } from 'app/services/shopify/products';

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products && products[0];

  if (product) {
    return <ProductView product={product} />;
  } else {
    return <h3>No se encontro el producto</h3>;
  }
}
