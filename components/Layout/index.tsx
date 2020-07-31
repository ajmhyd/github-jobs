import { ReactNode } from 'react';
import { useColorMode, Container } from '@chakra-ui/core';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Github Jobs' }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {colorMode === 'light' ? (
          <link rel="icon" href="/faviconBlack.ico" />
        ) : (
          <link rel="icon" href="/faviconWhite.ico" />
        )}
      </Head>
      <Container maxW="xl" py="4">
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </Container>
    </div>
  );
};

export default Layout;
