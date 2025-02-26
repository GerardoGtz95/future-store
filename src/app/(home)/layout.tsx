import { Hero } from 'app/componentes/home/Hero';
import { Description } from 'app/componentes/home/Description';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  );
}
