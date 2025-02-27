import { env } from 'app/config/env';
import { shopifyUrls } from './urls';

export const getProducts = async (
  id?: string
): Promise<ProductType[] | null> => {
  try {
    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : `${shopifyUrls.products.all}`;
    const response = await fetch(apiUrl, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
      }),
      next: {
        revalidate: 3600,
        tags: ['main-products'],
      },
    });

    const { products } = await response.json();

    const transformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      };
    });

    return transformedProducts as ProductType[];
  } catch (error) {
    return null;
  }
};
