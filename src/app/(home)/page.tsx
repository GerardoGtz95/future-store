import { Metadata } from 'next';
import { MainProducts } from 'app/componentes/home/MainProducts';

export const metadata: Metadata = {
  title: '🚀 Future Wolrd',
  description: 'Welcome to the future world, a store from another century',
  keywords: ['ecommerce', 'technology'],
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
