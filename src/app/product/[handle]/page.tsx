import { ProductView } from 'app/componentes/product/ProductView';
import { getProducts } from 'app/services/shopify/products';
import { redirect } from 'next/navigation';

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products && products[0];

  return {
    title: product?.title,
    description: product?.description,
    keywords: product?.tags,
    openGraph: {
      images: [product?.image],
    },
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products && products[0];

  if (!id) {
    redirect('/');
  }

  if (product) {
    return <ProductView product={product} />;
  } else {
    return <h3>No se encontro el producto</h3>;
  }
}
