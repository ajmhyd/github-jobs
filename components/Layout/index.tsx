import { ReactNode } from 'react';
import { Container, useColorMode } from '@chakra-ui/core';
import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

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
          <link rel="icon" href="/favicon/faviconBlack.ico" />
        ) : (
            <link rel="icon" href="/favicon/faviconWhite.ico" />
          )}
      </Head>
      <Container maxW="xl" pt="4">
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
