import { getProducts } from 'app/services/shopify/products';

/**
 * Back for frontend, proxy server
 * Las peticiones quedan de manera interna y mas segura
 * Las peticiones nunca son expuestas cuando se utilizan server components
 * pero si cuando es un client component por eso usar back for frontend
 * es una buena estrategia para mantener las peticiones de manera mas segura
 */
export async function GET() {
  const products = await getProducts();

  return Response.json({ products });
}
