import { Header } from 'app/componentes/shared/Header';
import { Roboto } from 'next/font/google';
import { Footer } from 'app/componentes/shared/Footer';
import 'app/sass/globals.sass';

const roboto = Roboto({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
